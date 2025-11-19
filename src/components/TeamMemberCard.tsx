import React from 'react';
import { TeamMember } from '../../types/team';
import { LinkedInIcon } from '../ui/LinkedInIcon';

interface TeamMemberCardProps {
  member: TeamMember;
  showPosition?: boolean;
}

export function TeamMemberCard({ member, showPosition = true }: TeamMemberCardProps) {
  return (
    <div className="group relative bg-white p-6 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-1">
      <div className="mb-6">
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          {/* Expertise overlay on hover */}
          <div className="absolute inset-0 bg-[#132A31]/90 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-center text-sm leading-relaxed">
              {member.description}
            </p>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="text-xl font-bold text-[#132A31] mb-2">
          {member.name}
        </h3>
        {showPosition && (
          <div className="inline-block bg-[#132A31] text-white px-3 py-1 rounded-[4px] text-sm mb-3">
            {member.position}
          </div>
        )}
        <div className="text-[#132A31] text-lg pr-12">
          {member.role.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 right-6">
        <LinkedInIcon 
          href={member.linkedin}
          className="w-8 h-8"
        />
      </div>
    </div>
  );
}