
import React from 'react';
import type { Goals } from '../types';

interface GoalsAndNotesProps {
  goals: Goals;
  onGoalChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  notes: string;
  onNotesChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const goalLabels: { key: keyof Goals, label: string }[] = [
    { key: 'weightReduction', label: 'Gewichtsreduktion' },
    { key: 'muscleBuilding', label: 'Muskelaufbau' },
    { key: 'postureImprovement', label: 'Verbesserung Körperhaltung' },
];

export const GoalsAndNotes: React.FC<GoalsAndNotesProps> = ({ goals, onGoalChange, notes, onNotesChange }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-semibold text-accent-dark mb-4">Ziele</h3>
        <div className="space-y-3">
            {goalLabels.map(({key, label}) => (
                <label key={key} className="flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        name={key}
                        checked={goals[key]}
                        onChange={onGoalChange}
                        className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="ml-3 text-accent-dark">{label}</span>
                </label>
            ))}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-accent-dark mb-4">Notizen des Beraters</h3>
        <textarea
          value={notes}
          onChange={onNotesChange}
          rows={5}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition"
          placeholder="Hier Notizen eintragen..."
        />
      </div>
    </div>
  );
};
