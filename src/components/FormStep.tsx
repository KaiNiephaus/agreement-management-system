import React, { ReactNode } from 'react';

interface FormStepProps {
  step: number;
  title: string;
  description: string;
  children: ReactNode;
}

export default function FormStep({ step, title, description, children }: FormStepProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-6">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0">
          <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-900 text-sm font-medium">
            {step}
          </span>
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <div className="mt-6">{children}</div>
    </div>
  );
}