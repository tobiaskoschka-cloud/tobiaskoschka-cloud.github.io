
import React from 'react';

interface ScoreTotalProps {
  score: number;
}

export const ScoreTotal: React.FC<ScoreTotalProps> = ({ score }) => {
  const scorePercentage = Math.min(score, 100);

  const getBarColor = (percentage: number): string => {
    if (percentage < 20) return 'bg-red-500';
    if (percentage < 40) return 'bg-orange-400';
    if (percentage < 60) return 'bg-yellow-400';
    if (percentage < 80) return 'bg-lime-500';
    return 'bg-green-500';
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-accent-dark mb-4">Gesamtscore</h2>
      <div className="flex items-center gap-4">
        <div className="w-full bg-gray-200 rounded-full h-8">
          <div
            className={`h-8 rounded-full transition-all duration-500 ease-out ${getBarColor(scorePercentage)}`}
            style={{ width: `${scorePercentage}%` }}
          />
        </div>
        <div className="text-3xl font-bold text-primary whitespace-nowrap">
          {score} / 100
        </div>
      </div>
    </div>
  );
};
