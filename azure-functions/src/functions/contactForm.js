// azure-functions/src/functions/contactForm.js
const { app } = require('@azure/functions');
const { EmailClient, KnownEmailSendStatus } = require("@azure/communication-email");

app.http('contactForm', {
    methods: ['POST', 'OPTIONS'],
    authLevel: 'anonymous',
    route: 'contact-form',
    handler: async (request, context) => {
        context.log('Contact form submission received');

        // Set CORS headers
        const corsHeaders = {
            'Access-Control-Allow-Origin': process.env.FRONTEND_URL || '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Content-Type': 'application/json'
        };

        // Handle preflight request
        if (request.method === 'OPTIONS') {
            return {
                status: 200,
                headers: corsHeaders
            };
        }

        try {
            // Parse request body
            const body = await request.json();
            context.log('Request body received');

            // Validate required fields
            const requiredFields = ['firstName', 'lastName', 'email', 'company', 'message', 'referralSource'];
            const missingFields = requiredFields.filter(field => !body[field]);
            
            if (missingFields.length > 0) {
                return {
                    status: 400,
                    headers: corsHeaders,
                    body: JSON.stringify({
                        error: `Missing required fields: ${missingFields.join(', ')}`
                    })
                };
            }

            if (!body.privacyAccepted) {
                return {
                    status: 400,
                    headers: corsHeaders,
                    body: JSON.stringify({
                        error: 'Privacy policy must be accepted'
                    })
                };
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(body.email)) {
                return {
                    status: 400,
                    headers: corsHeaders,
                    body: JSON.stringify({
                        error: 'Invalid email format'
                    })
                };
            }

            // Initialize Azure Communication Email client
            const connectionString = process.env.COMMUNICATION_SERVICES_CONNECTION_STRING;
            if (!connectionString) {
                throw new Error('Communication Services connection string not configured');
            }

            const emailClient = new EmailClient(connectionString);

            // Improved helper function to send email with timeout and better error handling
            const sendEmailWithTimeout = async (message, timeoutMs = 60000) => {
                return Promise.race([
                    // Email sending promise
                    (async () => {
                        try {
                            context.log('Starting email send operation...');
                            const poller = await emailClient.beginSend(message);
                            
                            if (!poller.getOperationState().isStarted) {
                                throw new Error('Failed to start email sending operation');
                            }

                            context.log('Email send operation started, waiting for completion...');
                            const result = await poller.pollUntilDone();
                            
                            context.log('Email send operation completed with status:', result.status);
                            
                            if (result.status !== KnownEmailSendStatus.Succeeded) {
                                const errorMsg = result.error?.message || `Email failed with status: ${result.status}`;
                                throw new Error(errorMsg);
                            }

                            return result;
                        } catch (error) {
                            context.log.error('Error in email send operation:', error);
                            throw error;
                        }
                    })(),
                    // Timeout promise
                    new Promise((_, reject) => 
                        setTimeout(() => reject(new Error(`Email operation timed out after ${timeoutMs}ms`)), timeoutMs)
                    )
                ]);
            };

            // Prepare email content mappings
            const salutationMap = {
                'Frau': 'Mrs.',
                'Herr': 'Mr.',
                'Divers': 'Mx.'
            };

            const referralSourceMap = {
                'social': 'Social Media',
                'linkedin': 'LinkedIn',
                'friends': 'Friends/Colleagues',
                'website': 'Website',
                'podcast': 'Podcast',
                'tv': 'TV/Media',
                'other': 'Other'
            };

            // Create HTML email content for company notification
            const companyEmailHtml = `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    <p><strong>Date:</strong> ${new Date().toLocaleString('de-DE')}</p>
                    
                    <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
                        <p><strong>Salutation:</strong> ${salutationMap[body.salutation] || body.salutation || 'Not specified'}</p>
                        <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
                        <p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
                        <p><strong>Phone:</strong> ${body.phone || 'Not provided'}</p>
                    </div>
                    
                    <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #374151; margin-top: 0;">Company Information</h3>
                        <p><strong>Company:</strong> ${body.company}</p>
                        <p><strong>Company Size:</strong> ${body.companySize || 'Not specified'}</p>
                        <p><strong>Industry:</strong> ${body.industry || 'Not specified'}</p>
                    </div>
                    
                    <div style="background-color: #fef3f2; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #374151; margin-top: 0;">Message</h3>
                        <p style="white-space: pre-wrap;">${body.message}</p>
                    </div>
                    
                    <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #374151; margin-top: 0;">Additional Information</h3>
                        <p><strong>How did they hear about us:</strong> ${referralSourceMap[body.referralSource] || body.referralSource}</p>
                        <p><strong>Privacy Policy Accepted:</strong> ${body.privacyAccepted ? 'Yes' : 'No'}</p>
                    </div>
                    
                    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
                    <p style="color: #6b7280; font-size: 14px; text-align: center;">
                        This email was sent from the Volatile contact form.
                    </p>
                </div>
            `;

            // Create plain text version for company notification
            const companyEmailPlain = `
New Contact Form Submission

Date: ${new Date().toLocaleString('de-DE')}

Contact Information:
- Salutation: ${salutationMap[body.salutation] || body.salutation || 'Not specified'}
- Name: ${body.firstName} ${body.lastName}
- Email: ${body.email}
- Phone: ${body.phone || 'Not provided'}

Company Information:
- Company: ${body.company}
- Company Size: ${body.companySize || 'Not specified'}
- Industry: ${body.industry || 'Not specified'}

Message:
${body.message}

Additional Information:
- How did they hear about us: ${referralSourceMap[body.referralSource] || body.referralSource}
- Privacy Policy Accepted: ${body.privacyAccepted ? 'Yes' : 'No'}

---
This email was sent from the Volatile contact form.
            `;

            // Email message to company
            const companyMessage = {
                senderAddress: process.env.FROM_EMAIL || "noreply@volatile.de",
                content: {
                    subject: `New Contact Form Submission - ${body.firstName} ${body.lastName} from ${body.company}`,
                    plainText: companyEmailPlain,
                    html: companyEmailHtml
                },
                recipients: {
                    to: [{ 
                        address: process.env.TO_EMAIL || 'mail@volatile.de', 
                        displayName: 'Volatile Team' 
                    }]
                }
            };

            // Customer confirmation email HTML
            const customerEmailHtml = `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background-color: black; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
                        <h2 style="margin: 0; font-size: 28px;">Thank you for your inquiry!</h2>
                    </div>
                    
                    <div style="padding: 30px; background-color: white; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
                        <p style="font-size: 16px; color: #374151;">Dear ${body.firstName} ${body.lastName},</p>
                        
                        <p style="color: #374151; line-height: 1.6;">
                            Thank you for reaching out to Volatile. We have received your message and will get back to you as soon as possible.
                        </p>
                        
                        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                            <h3 style="color: black; margin-top: 0;">Your inquiry details:</h3>
                            <ul style="color: #374151; padding-left: 20px;">
                                <li><strong>Company:</strong> ${body.company}</li>
                                <li><strong>Industry:</strong> ${body.industry || 'Not specified'}</li>
                                <li><strong>Message:</strong> ${body.message.substring(0, 100)}${body.message.length > 100 ? '...' : ''}</li>
                            </ul>
                        </div>
                        
                        <p style="color: #374151; line-height: 1.6;">
                            Best regards,<br>
                            <strong>The Volatile Team</strong>
                        </p>
                    </div>
                    
                    <div style="background-color: #f9fafb; padding: 20px; text-align: center; border-radius: 8px; margin-top: 20px;">
                        <p style="font-size: 14px; color: #6b7280; margin: 0;">
                            <strong>Volatile GmbH</strong><br>
                            Lindenstraße 14<br>
                            50674 Köln<br>
                            Email: mail@volatile.de
                        </p>
                    </div>
                </div>
            `;

            // Customer confirmation email plain text
            const customerEmailPlain = `
Thank you for contacting us!

Dear ${body.firstName} ${body.lastName},

Thank you for reaching out to Volatile. We have received your message and will get back to you as soon as possible.

Your inquiry details:
- Company: ${body.company}
- Industry: ${body.industry || 'Not specified'}
- Message: ${body.message.substring(0, 100)}${body.message.length > 100 ? '...' : ''}

Best regards,
The Volatile Team

---
Volatile GmbH
Lindenstraße 14
50674 Köln
Email: mail@volatile.de
            `;

            // Customer confirmation message
            const customerMessage = {
                senderAddress: process.env.FROM_EMAIL || "noreply@volatile.de",
                content: {
                    subject: "Thank you for contacting us - Volatile",
                    plainText: customerEmailPlain,
                    html: customerEmailHtml
                },
                recipients: {
                    to: [{ 
                        address: body.email, 
                        displayName: `${body.firstName} ${body.lastName}` 
                    }]
                }
            };

            // Send emails with proper error handling and timeouts
            let companyEmailSent = false;
            let customerEmailSent = false;
            let emailErrors = [];

            // Send email to company
            try {
                context.log('Sending notification email to company...');
                await sendEmailWithTimeout(companyMessage, 60000); // 60 second timeout
                companyEmailSent = true;
                context.log('Company notification email sent successfully');
            } catch (error) {
                context.log.error('Failed to send company notification email:', error);
                emailErrors.push(`Company notification: ${error.message}`);
            }

            // Send confirmation email to customer (uncomment when ready)
            try {
                context.log('Sending confirmation email to customer...');
                await sendEmailWithTimeout(customerMessage, 60000); // 60 second timeout
                customerEmailSent = true;
                context.log('Customer confirmation email sent successfully');
            } catch (error) {
                context.log.error('Failed to send customer confirmation email:', error);
                emailErrors.push(`Customer confirmation: ${error.message}`);
            }

            // Return success even if emails partially failed (form submission is more important)
            const responseMessage = emailErrors.length > 0 
                ? 'Contact form submitted successfully, but there were some email delivery issues. We will still respond to your inquiry.'
                : 'Contact form submitted successfully. You should receive a confirmation email shortly.';

            // Log email status for monitoring
            context.log('Email sending summary:', {
                companyEmailSent,
                customerEmailSent,
                errors: emailErrors
            });

            return {
                status: 200,
                headers: corsHeaders,
                body: JSON.stringify({
                    success: true,
                    message: responseMessage,
                    emailStatus: {
                        companyNotification: companyEmailSent,
                        customerConfirmation: customerEmailSent,
                        errors: emailErrors.length > 0 ? emailErrors : undefined
                    }
                })
            };

        } catch (error) {
            context.log.error('Error processing contact form:', error);
            
            return {
                status: 500,
                headers: corsHeaders,
                body: JSON.stringify({
                    error: 'Internal server error. Please try again later.',
                    details: process.env.NODE_ENV === 'development' ? error.message : undefined
                })
            };
        }
    }
});