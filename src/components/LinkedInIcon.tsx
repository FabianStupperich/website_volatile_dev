import React from 'react';

interface LinkedInIconProps {
  href: string;
  className?: string;
}

export const LinkedInIcon: React.FC<LinkedInIconProps> = ({ href, className = "w-7 h-6" }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="hover:opacity-80 transition-opacity"
    >
    <img 
      src="/images/LI-In-Bug.png" 
      alt="LinkedIn"
      className={className}
    />
    </a>
  );
};