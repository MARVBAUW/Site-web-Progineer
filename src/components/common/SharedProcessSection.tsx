import React from 'react';
import { InternalLinkText } from '@/utils/internalLinking';

interface ProcessStep {
  title: string;
  description: string;
  items?: string[];
}

interface SharedProcessSectionProps {
  pageTitle: string;
  steps: ProcessStep[];
}

const SharedProcessSection: React.FC<SharedProcessSectionProps> = ({ pageTitle, steps }) => {
  if (!steps || steps.length === 0) {
    return null;
  }

  return (
    <div id="process" className="mb-12 md:mb-16">
      <h3 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center">{pageTitle}</h3>
      {/* Timeline for medium and larger screens */}
      <div className="hidden md:flex flex-col items-center">
        <div className="flex justify-between w-full max-w-5xl">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center w-1/6">
                <div className="w-12 h-12 rounded-full bg-khaki-100 dark:bg-khaki-700 text-khaki-700 dark:text-khaki-100 flex items-center justify-center font-semibold text-xl mb-2">
                  {index + 1}
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-medium text-slate-800 dark:text-slate-100">{step.title}</h4>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-grow flex items-center justify-center">
                  <div className="w-full h-1 bg-khaki-200 dark:bg-khaki-600"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {steps.map((step, index) => (
            <div key={index} className="bg-card p-5 rounded-lg shadow-sm border border-gray-100 dark:border-slate-700">
              <h4 className="text-xl font-medium mb-2 text-slate-800 dark:text-slate-100">{index + 1}. {step.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                <InternalLinkText text={step.description} maxOccurrences={2} />
              </p>
              {step.items && step.items.length > 0 && (
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 pl-1">
                  {step.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <InternalLinkText text={item} maxOccurrences={1} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Vertical timeline for small screens */}
      <div className="md:hidden space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="flex">
            <div className="flex flex-col items-center mr-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-khaki-100 dark:bg-khaki-700 text-khaki-700 dark:text-khaki-100 flex items-center justify-center font-semibold text-lg">
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div className="w-px h-full bg-khaki-200 dark:bg-khaki-600 mt-2"></div>
              )}
            </div>
            <div className="bg-card p-5 rounded-lg shadow-sm border border-gray-100 dark:border-slate-700 flex-grow">
              <h4 className="text-xl font-medium mb-2 text-slate-800 dark:text-slate-100">{step.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                <InternalLinkText text={step.description} maxOccurrences={2} />
              </p>
              {step.items && step.items.length > 0 && (
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 pl-1">
                  {step.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <InternalLinkText text={item} maxOccurrences={1} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SharedProcessSection;