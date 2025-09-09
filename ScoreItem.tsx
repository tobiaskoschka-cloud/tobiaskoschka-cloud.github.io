
import React from 'react';

interface ScoreItemProps {
  label: string;
  maxPoints: number;
  value: number;
  onChange: (value: number) => void;
}

const getColorForScore = (score: number, maxScore: number): string => {
  if (maxScore === 0) return 'bg-gray-200';
  const percentage = score / maxScore;

  if (percentage < 0.2) return 'bg-red-500 hover:bg-red-600';
  if (percentage < 0.4) return 'bg-orange-400 hover:bg-orange-500';
  if (percentage < 0.6) return 'bg-yellow-400 hover:bg-yellow-500';
  if (percentage < 0.8) return 'bg-lime-500 hover:bg-lime-600';
  return 'bg-green-500 hover:bg-green-600';
};


export const ScoreItem: React.FC<ScoreItemProps> = ({ label, maxPoints, value, onChange }) => {
  const points = Array.from({ length: maxPoints + 1 }, (_, i) => i);

  return (
    <div>
      <label className="block font-medium text-accent-dark mb-2">{label}</label>
      <div className="flex flex-wrap gap-2 items-center">
        {points.map(point => (
          <button
            key={point}
            type="button"
            onClick={() => onChange(point)}
            className={`
              w-9 h-9 sm:w-10 sm:h-10 rounded-md flex items-center justify-center 
              font-bold text-white text-sm transition-transform duration-150
              ${getColorForScore(point, maxPoints)}
              ${value === point ? 'ring-2 ring-offset-2 ring-blue-500 scale-110' : 'hover:scale-105'}
            `}
          >
            {point}
          </button>
        ))}
      </div>
    </div>
  );
};
