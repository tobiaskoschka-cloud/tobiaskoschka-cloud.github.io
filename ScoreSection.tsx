
import React from 'react';

interface ScoreSectionProps {
  title: string;
  children: React.ReactNode;
}

export const ScoreSection: React.FC<ScoreSectionProps> = ({ title, children }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-accent-dark border-b-2 border-primary pb-2 mb-6">{title}</h2>
      <div className="space-y-6">
        {children}
      </div>
    </div>
  );
};
