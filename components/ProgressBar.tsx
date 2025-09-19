import React from "react";
import { Check } from "lucide-react";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  stepTitles: string[];
}

export const ProgressBar = ({
  currentStep,
  totalSteps,
  stepTitles,
}: ProgressBarProps) => {
  return (
    <div className="mb-8">
      <div className="mb-4 flex items-center justify-between">
        {stepTitles.map((title, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 ${
                index < currentStep
                  ? "bg-emerald-500 text-white"
                  : index === currentStep
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-500"
              }`}
            >
              {index < currentStep ? <Check size={16} /> : index + 1}
            </div>
            <span
              className={`mt-1 text-xs transition-colors duration-300 ${
                index <= currentStep ? "text-blue-600" : "text-gray-400"
              }`}
            >
              {title}
            </span>
          </div>
        ))}
      </div>
      <div className="h-2 w-full rounded-full bg-gray-200">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-500 ease-out"
          style={{ width: `${(currentStep / (totalSteps - 1)) * 100}%` }}
        />
      </div>
    </div>
  );
};
