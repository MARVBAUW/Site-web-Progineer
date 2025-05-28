import React from 'react';

interface SEOContentSectionProps {
  title: string;
  intro: string;
  bullets: string[];
  conclusion: string;
}

const SEOContentSection = ({ title, intro, bullets, conclusion }: SEOContentSectionProps) => (
  <section className="my-16 px-4">
    <div className="max-w-3xl mx-auto bg-white dark:bg-muted/60 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-khaki-700 dark:text-khaki-300 mb-4 flex items-center gap-2">
        <span className="inline-block w-2 h-6 bg-khaki-400 rounded-full mr-2" />
        {title}
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{intro}</p>
      <ul className="mb-6 space-y-3">
        {bullets.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="mt-1 w-3 h-3 rounded-full bg-khaki-400 flex-shrink-0" />
            <span className="text-gray-700 dark:text-gray-200 text-base">{item}</span>
          </li>
        ))}
      </ul>
      <p className="text-base text-gray-600 dark:text-gray-400 font-medium">{conclusion}</p>
    </div>
  </section>
);

export default SEOContentSection; 