
import React from 'react';
import type { PersonalInfo } from '../types';

interface PersonalInfoInputProps {
  data: PersonalInfo;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PersonalInfoInput: React.FC<PersonalInfoInputProps> = ({ data, onChange }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
      <div className="flex flex-col">
        <label htmlFor="firstName" className="mb-1 font-medium text-accent-dark">Vorname</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={data.firstName}
          onChange={onChange}
          className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="lastName" className="mb-1 font-medium text-accent-dark">Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={data.lastName}
          onChange={onChange}
          className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="age" className="mb-1 font-medium text-accent-dark">Alter</label>
        <input
          type="number"
          id="age"
          name="age"
          value={data.age}
          onChange={onChange}
          className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="weight" className="mb-1 font-medium text-accent-dark">Gewicht (kg)</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={data.weight}
          onChange={onChange}
          className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition"
        />
      </div>
    </div>
  );
};
