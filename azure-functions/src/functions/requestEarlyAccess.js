const { app } = require('@azure/functions');
const { EmailClient, KnownEmailSendStatus } = require("@azure/communication-email");

app.http('requestEarlyAccess', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log('Contact form submission received');

        // Set CORS headers
        const corsHeaders = {
            'Access-Control-Allow-Origin': process.env.FRONTEND_URL || '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        };

        // Handle preflight requests
        if (request.method === 'OPTIONS') {
            return {
                status: 200,
                headers: corsHeaders
            };
        }

        try {
            // Parse request body
            const body = await request.json();
            const { firstName, lastName, email, company, message } = body;

            // Validate required fields
            if (!firstName || !lastName || !email) {
                return {
                    status: 400,
                    headers: corsHeaders,
                    jsonBody: {
                        success: false,
                        error: 'Missing required fields: firstName, lastName, email'
                    }
                };
            }

            // Initialize the EmailClient
            const connectionString = process.env.COMMUNICATION_SERVICES_CONNECTION_STRING;
            if (!connectionString) {
                context.log.error('COMMUNICATION_SERVICES_CONNECTION_STRING environment variable is not set');
                return {
                    status: 500,
                    headers: corsHeaders,
                    jsonBody: {
                        success: false,
                        error: 'Server configuration error'
                    }
                };
            }

            const emailClient = new EmailClient(connectionString);

            // Email content
            const emailContent = {
                senderAddress: process.env.SENDER_EMAIL || "noreply@yourdomain.com",
                content: {
                    subject: `New Contact Form Submission from ${firstName} ${lastName}`,
                    plainText: `
New contact form submission:

Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company || 'Not provided'}

Message:
${message || 'No message provided'}

Submitted at: ${new Date().toISOString()}
                    `,
                    html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                        <h2 style="color: #0f766e; border-bottom: 2px solid #0f766e; padding-bottom: 10px;">
                            New Contact Form Submission
                        </h2>
                        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                            <h3 style="color: #334155; margin-top: 0;">Contact Information</h3>
                            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
                        </div>
                        ${message ? `
                        <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                            <h3 style="color: #334155; margin-top: 0;">Message</h3>
                            <p style="white-space: pre-wrap;">${message}</p>
                        </div>
                        ` : ''}
                        <div style="color: #64748b; font-size: 12px; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 15px;">
                            <p>Submitted at: ${new Date().toLocaleString()}</p>
                            <p>This email was automatically generated from your website contact form.</p>
                        </div>
                    </div>
                    `
                },
                recipients: {
                    to: [
                        {
                            address: process.env.RECIPIENT_EMAIL || "contact@yourdomain.com",
                            displayName: "Contact Form"
                        }
                    ]
                }
            };

            // Send confirmation email to the user (optional)
            const confirmationEmail = {
                senderAddress: process.env.SENDER_EMAIL || "noreply@yourdomain.com",
                content: {
                    subject: "Thank you for contacting us - Volatile",
                    plainText: `
Dear ${firstName},

Thank you for contacting us! We have received your message and will get back to you as soon as possible.

Here's a copy of your submission:
Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company || 'Not provided'}
Message: ${message || 'No message provided'}

Best regards,
The Volatile Team
                    `,
                    html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                        <div style="text-align: center; margin-bottom: 30px;">
                            <h1 style="color: black;">Thank You!</h1>
                        </div>
                        <p>Dear ${firstName},</p>
                        <p>Thank you for contacting us! We have received your message and will get back to you as soon as possible.</p>
                        
                        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                            <h3 style="color: #334155; margin-top: 0;">Your Submission</h3>
                            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                            <p><strong>Email:</strong> ${email}</p>
                            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
                            ${message ? `<p><strong>Message:</strong></p><p style="white-space: pre-wrap;">${message}</p>` : ''}
                        </div>
                        
                        <p>Best regards,<br>The Volatile Team</p>
                        
                        <div style="color: #64748b; font-size: 12px; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 15px;">
                            <p>This is an automated confirmation email.</p>
                        </div>
                    </div>
                    `
                },
                recipients: {
                    to: [
                        {
                            address: email,
                            displayName: `${firstName} ${lastName}`
                        }
                    ]
                }
            };

            // Send both emails
            context.log('Sending notification email...');
            const notificationPoller = await emailClient.beginSend(emailContent);
            const notificationResult = await notificationPoller.pollUntilDone();

            context.log('Sending confirmation email...');
            const confirmationPoller = await emailClient.beginSend(confirmationEmail);
            const confirmationResult = await confirmationPoller.pollUntilDone();

            // Check if emails were sent successfully
            if (notificationResult.status === KnownEmailSendStatus.Succeeded && 
                confirmationResult.status === KnownEmailSendStatus.Succeeded) {
                context.log('Both emails sent successfully');
                return {
                    status: 200,
                    headers: corsHeaders,
                    jsonBody: {
                        success: true,
                        message: 'Form submitted successfully and confirmation email sent'
                    }
                };
            } else {
                context.log.error('One or both emails failed to send', {
                    notification: notificationResult.status,
                    confirmation: confirmationResult.status
                });
                return {
                    status: 500,
                    headers: corsHeaders,
                    jsonBody: {
                        success: false,
                        error: 'Failed to send emails'
                    }
                };
            }

        } catch (error) {
            context.log.error('Error processing contact form:', error);
            return {
                status: 500,
                headers: corsHeaders,
                jsonBody: {
                    success: false,
                    error: 'Internal server error'
                }
            };
        }
    }
});