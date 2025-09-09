
export interface PersonalInfo {
  firstName: string;
  lastName: string;
  age: string;
  weight: string;
}

export interface Scores {
  preExistingConditions: number;
  bmi: number;
  waistToHeight: number;
  bodyFat: number;
  posture: number;
  squat: number;
  plank: number;
  rowing: number;
  gluteBridge: number;
}

export interface Goals {
  weightReduction: boolean;
  muscleBuilding: boolean;
  postureImprovement: boolean;
}
