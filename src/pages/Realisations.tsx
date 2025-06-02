import React from 'react';
import { EnhancedSEO } from '@/components/seo/EnhancedSEO';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import { InternalLinkText } from '@/utils/internalLinking';
import SEOFooter from '@/components/common/SEOFooter';
import { projects } from '@/data/projects';

import ProjectsGallery from '@/components/realisations/ProjectsGallery';
import ProjectTypesSection from '@/components/realisations/ProjectTypesSection';
import CTASection from '@/components/realisations/CTASection';

const Realisations = () => {
  return (
    <>
      <EnhancedSEO 
        title="Nos réalisations | Maître d'œuvre Progineer en PACA"
        description="Découvrez les projets de construction, rénovation et extension réalisés par Progineer, maître d'œuvre en PACA. Des réalisations uniques et sur-mesure."
        keywords={[
          "réalisations maître d'œuvre",
          "projets construction PACA",
          "portfolio rénovation",
          "extension maison Marseille",
          "références travaux"
        ]}
        url="https://progineer.fr/realisations-architecte-maison"
        schemaData={{
          type: "ItemList",
          name: "Portfolio de réalisations Progineer",
          description: "Collection de projets de construction, rénovation et extension réalisés par Progineer en région PACA",
          url: "https://progineer.fr/realisations-architecte-maison",
          itemListElement: projects.map((project, index) => ({
            "@type": "Project",
            position: index + 1,
            name: project.title,
            description: project.description,
            url: `https://progineer.fr/realisations-architecte-maison#${project.id}`,
            image: project.image
          }))
        }}
      />

      <main>
        <h1 className="sr-only">Nos réalisations - Portfolio de projets de maîtrise d'œuvre en PACA</h1>
        {/* Hero section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-khaki-50 to-white">
          <Container size="md">
            <div className="text-center">
              <div className="inline-block px-3 py-1 mb-6 rounded-full bg-khaki-100 text-khaki-800 text-sm font-medium">
                Nos réalisations
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold mb-6">
                Portfolio de nos projets
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                <InternalLinkText 
                  text="Exemples de projets réalisés par notre équipe de maîtrise d'œuvre à Marseille et en PACA. Découvrez notre savoir-faire en matière de construction et rénovation."
                  maxOccurrences={2}
                />
              </p>
            </div>
          </Container>
        </section>

        {/* Projects gallery */}
        <ProjectsGallery projects={projects} />

        {/* Types de projets section */}
        <ProjectTypesSection />

        {/* CTA section */}
        <CTASection />
      </main>

      {/* SEO Footer renforcé */}
      <SEOFooter 
        text="Portfolio de projets réalisés par Progineer, maître d'œuvre expert en PACA. Découvrez nos réalisations en construction de maisons sur mesure, rénovation et extension dans toute la région Provence-Alpes-Côte d'Azur."
        additionalKeywords={[
          "portfolio maître d'œuvre", 
          "réalisations construction PACA", 
          "projets rénovation Marseille", 
          "références extension maison", 
          "maisons contemporaines", 
          "villa écologique Toulon", 
          "rénovation appartement"
        ]}
      />
    </>
  );
};

export default Realisations;
