
import React, { useState, useMemo } from 'react';
import type { PersonalInfo, Scores, Goals } from './types';
import { PersonalInfoInput } from './components/PersonalInfoInput';
import { ScoreSection } from './components/ScoreSection';
import { ScoreItem } from './components/ScoreItem';
import { ScoreTotal } from './components/ScoreTotal';
import { GoalsAndNotes } from './components/GoalsAndNotes';

const App: React.FC = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    firstName: '',
    lastName: '',
    age: '',
    weight: '',
  });

  const [scores, setScores] = useState<Scores>({
    preExistingConditions: 0,
    bmi: 0,
    waistToHeight: 0,
    bodyFat: 0,
    posture: 0,
    squat: 0,
    plank: 0,
    rowing: 0,
    gluteBridge: 0,
  });

  const [goals, setGoals] = useState<Goals>({
    weightReduction: false,
    muscleBuilding: false,
    postureImprovement: false,
  });

  const [notes, setNotes] = useState('');

  const handleScoreChange = (key: keyof Scores, value: number) => {
    setScores(prev => ({ ...prev, [key]: value }));
  };
  
  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleGoalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setGoals(prev => ({ ...prev, [name]: checked }));
  };

  const totalScore = useMemo(() => {
    return Object.values(scores).reduce((sum, current) => sum + current, 0);
  }, [scores]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl mx-auto">
        <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary">Health Score</h1>
            <p className="text-lg text-accent-dark mt-2">Fragebogen zur Ermittlung deines persönlichen Gesundheitsscores</p>
        </header>

        <main className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
                 <h2 className="text-2xl font-semibold text-accent-dark border-b-2 border-primary pb-2 mb-6">Persönliche Daten</h2>
                 <PersonalInfoInput data={personalInfo} onChange={handlePersonalInfoChange} />
            </div>

            <ScoreSection title="Allgemeiner Gesundheitszustand">
                <ScoreItem label="Bekannte Vorerkrankungen (z.B. Diabetes, Bluthochdruck, Arthrose, Bandscheibenvorfall, Adipositas)" maxPoints={20} value={scores.preExistingConditions} onChange={(val) => handleScoreChange('preExistingConditions', val)} />
                <ScoreItem label="BMI" maxPoints={10} value={scores.bmi} onChange={(val) => handleScoreChange('bmi', val)} />
                <ScoreItem label="Taille-Größe Verhältnis" maxPoints={10} value={scores.waistToHeight} onChange={(val) => handleScoreChange('waistToHeight', val)} />
                <ScoreItem label="Körperfettanteil in %" maxPoints={10} value={scores.bodyFat} onChange={(val) => handleScoreChange('bodyFat', val)} />
            </ScoreSection>

            <ScoreSection title="Muskulärer Zustand / Haltung (EMS-Training)">
                <ScoreItem label="Körperhaltung in Normalposition" maxPoints={10} value={scores.posture} onChange={(val) => handleScoreChange('posture', val)} />
                <ScoreItem label="Kniebeuge" maxPoints={10} value={scores.squat} onChange={(val) => handleScoreChange('squat', val)} />
                <ScoreItem label="Plank" maxPoints={10} value={scores.plank} onChange={(val) => handleScoreChange('plank', val)} />
                <ScoreItem label="Ruderzug" maxPoints={10} value={scores.rowing} onChange={(val) => handleScoreChange('rowing', val)} />
                <ScoreItem label="Schulterbrücke" maxPoints={10} value={scores.gluteBridge} onChange={(val) => handleScoreChange('gluteBridge', val)} />
            </ScoreSection>

            <ScoreTotal score={totalScore} />

            <GoalsAndNotes goals={goals} onGoalChange={handleGoalChange} notes={notes} onNotesChange={(e) => setNotes(e.target.value)} />
        </main>

        <footer className="text-center mt-12 text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} EMS Studio-Partner. Alle Rechte vorbehalten.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
