import React from 'react';
import Container from '@/components/common/Container';
import SEO from '@/components/common/SEO';
import { InternalLinkText } from '@/utils/internalLinking';
import SEOFooter from '@/components/common/SEOFooter';
import PrestationsSubNav from '@/components/prestations/PrestationsSubNav';

const PetitCollectif = () => {
  return (
    <>
      <SEO
        title="Construction de petit collectif résidentiel PACA | Progineer"
        description="Maître d'œuvre spécialiste des petits collectifs résidentiels en PACA. De l'optimisation foncière à la livraison, nous concevons des immeubles de qualité."
        keywords="petit collectif résidentiel, construction immeuble, maître d'œuvre Marseille, R+2, R+3, PACA"
        canonicalUrl="https://progineer.fr/prestations-maitre-oeuvre/petit-collectif"
      />
      
      {/* Ajout de la navigation secondaire pour les pages de prestation */}
      <PrestationsSubNav activeService="petit-collectif" />
      
      <section className="py-12">
        <Container>
          <h1 className="text-3xl font-bold mb-6">Conception et construction de petits collectifs résidentiels</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Sidebar sticky à gauche */}
            <aside className="lg:col-span-1 flex flex-col gap-6 order-2 lg:order-1">
              {/* Premier bloc sticky */}
              <div className="sticky top-24 bg-stone-50 rounded-xl p-6 shadow-sm mb-0">
                <h2 className="text-2xl font-semibold mb-4">Pourquoi nous choisir ?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start"><span className="text-khaki-600 mr-2 mt-1 text-lg">✓</span><div><h3 className="font-medium text-lg">Expertise petit collectif</h3><p className="text-sm text-gray-600 dark:text-gray-300">Connaissance des enjeux techniques et réglementaires propres aux petits immeubles résidentiels.</p></div></li>
                  <li className="flex items-start"><span className="text-khaki-600 mr-2 mt-1 text-lg">✓</span><div><h3 className="font-medium text-lg">Optimisation foncière</h3><p className="text-sm text-gray-600 dark:text-gray-300">Valorisation du terrain, conception adaptée à la parcelle et au PLU.</p></div></li>
                  <li className="flex items-start"><span className="text-khaki-600 mr-2 mt-1 text-lg">✓</span><div><h3 className="font-medium text-lg">Accompagnement global</h3><p className="text-sm text-gray-600 dark:text-gray-300">De la faisabilité à la livraison, suivi personnalisé à chaque étape.</p></div></li>
                </ul>
                <div className="mt-8 space-y-4">
                  <a href="/estimation" className="relative inline-flex items-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-khaki-600 text-khaki-50 shadow hover:bg-khaki-700 h-10 text-sm px-4 w-full justify-center">Estimer mon projet</a>
                  <a href="/contact" className="relative inline-flex items-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 text-sm px-4 w-full justify-center">Prendre rendez-vous</a>
                </div>
              </div>
              {/* Second bloc non sticky, espacé */}
              <div className="bg-card p-6 rounded-xl shadow-sm border border-border mt-6">
                <h3 className="text-xl font-semibold mb-4">Nos services petit collectif</h3>
                <ul className="space-y-2">
                  <li className="flex items-start"><span className="text-khaki-600 mr-2">•</span><span>Conception architecturale sur mesure</span></li>
                  <li className="flex items-start"><span className="text-khaki-600 mr-2">•</span><span>Optimisation des espaces communs</span></li>
                  <li className="flex items-start"><span className="text-khaki-600 mr-2">•</span><span>Gestion des démarches administratives</span></li>
                  <li className="flex items-start"><span className="text-khaki-600 mr-2">•</span><span>Suivi de chantier et coordination</span></li>
                  <li className="flex items-start"><span className="text-khaki-600 mr-2">•</span><span>Respect des normes environnementales</span></li>
                </ul>
                <div className="mt-6 space-y-4">
                  <a href="/estimation" className="relative inline-flex items-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-10 text-sm px-4 w-full justify-center bg-card hover:bg-muted/50">Estimer mon projet</a>
                  <a href="/contact" className="relative inline-flex items-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-10 text-sm px-4 w-full justify-center bg-card hover:bg-muted/50">Prendre rendez-vous</a>
                </div>
              </div>
            </aside>
            {/* Contenu principal à droite */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="md:col-span-2">
                  <InternalLinkText
                    text="Spécialiste du petit collectif résidentiel, Progineer accompagne les promoteurs et investisseurs souhaitant développer un projet sur mesure dans la région PACA. Nous intervenons de l'avant-projet à la livraison, incluant le montage administratif, la construction neuve ou la réhabilitation."
                    className="text-lg text-gray-600 dark:text-gray-300 mb-4"
                    maxOccurrences={2}
                  />
                  <p className="mb-4">
                    Notre expertise dans ce domaine garantit des projets respectant à la fois les contraintes économiques, 
                    les réglementations actuelles, et l'intégration harmonieuse dans le tissu urbain.
                  </p>
                  <p className="mb-4">
                    Que vous soyez un petit promoteur ou un investisseur, nous vous proposons une démarche globale incluant :
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Étude de faisabilité complète</li>
                    <li>Conception architecturale adaptée</li>
                    <li>Optimisation des surfaces et des coûts</li>
                    <li>Montage administratif et obtention des autorisations</li>
                    <li>Pilotage et coordination des travaux</li>
                    <li>Suivi financier et qualité de réalisation</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-4">Types de projets réalisés</h3>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>
                      <strong>Immeubles R+1 à R+3</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Immeubles de taille humaine parfaitement intégrés au tissu urbain existant</p>
                    </li>
                    <li>
                      <strong>Résidences de standing</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Petits collectifs haut de gamme avec prestations soignées</p>
                    </li>
                    <li>
                      <strong>Réhabilitations d'immeubles</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Transformation de bâtiments existants en petits collectifs</p>
                    </li>
                    <li>
                      <strong>Résidences services</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Petits collectifs adaptés à des publics spécifiques</p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Ajout de la section cards de prestations */}
              <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-6">Découvrez aussi nos autres prestations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <a href="/prestations-maitre-oeuvre/construction-neuve" className="block hover:shadow-lg transition-shadow">
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 h-full flex flex-col">
                      <div className="flex items-center mb-4"><span className="text-3xl mr-2">🏡</span><span className="font-bold">Construction neuve</span></div>
                      <div className="text-gray-600 dark:text-gray-300">Maisons individuelles et petits collectifs sur mesure, adaptés à vos besoins et à votre terrain.</div>
                    </div>
                  </a>
                  <a href="/prestations-maitre-oeuvre/renovation" className="block hover:shadow-lg transition-shadow">
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 h-full flex flex-col">
                      <div className="flex items-center mb-4"><span className="text-3xl mr-2">🔨</span><span className="font-bold">Rénovation</span></div>
                      <div className="text-gray-600 dark:text-gray-300">Rénovation énergétique, modernisation, amélioration de la performance et du confort de votre habitat.</div>
                    </div>
                  </a>
                  <a href="/prestations-maitre-oeuvre/extension" className="block hover:shadow-lg transition-shadow">
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 h-full flex flex-col">
                      <div className="flex items-center mb-4"><span className="text-3xl mr-2">🏗️</span><span className="font-bold">Extension</span></div>
                      <div className="text-gray-600 dark:text-gray-300">Agrandissement, surélévation, véranda, extension latérale, solutions sur mesure.</div>
                    </div>
                  </a>
                  <a href="/prestations-maitre-oeuvre/optimisation-espace" className="block hover:shadow-lg transition-shadow">
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 h-full flex flex-col">
                      <div className="flex items-center mb-4"><span className="text-3xl mr-2">📐</span><span className="font-bold">Optimisation d'espace</span></div>
                      <div className="text-gray-600 dark:text-gray-300">Aménagement intelligent, rangements sur mesure, valorisation de chaque mètre carré.</div>
                    </div>
                  </a>
                  <a href="/prestations-maitre-oeuvre/design-interieur" className="block hover:shadow-lg transition-shadow">
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 h-full flex flex-col">
                      <div className="flex items-center mb-4"><span className="text-3xl mr-2">🎨</span><span className="font-bold">Design d'intérieur</span></div>
                      <div className="text-gray-600 dark:text-gray-300">Conception d'intérieur personnalisée, choix des matériaux, plans détaillés, conseils déco.</div>
                    </div>
                  </a>
                  <a href="/prestations-maitre-oeuvre/montage-administratif" className="block hover:shadow-lg transition-shadow">
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 h-full flex flex-col">
                      <div className="flex items-center mb-4"><span className="text-3xl mr-2">📄</span><span className="font-bold">Montage administratif</span></div>
                      <div className="text-gray-600 dark:text-gray-300">Accompagnement expert pour toutes vos démarches administratives et autorisations d'urbanisme.</div>
                    </div>
                  </a>
                  <a href="/prestations-maitre-oeuvre/rehabilitation" className="block hover:shadow-lg transition-shadow">
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 h-full flex flex-col">
                      <div className="flex items-center mb-4"><span className="text-3xl mr-2">🏚️</span><span className="font-bold">Réhabilitation</span></div>
                      <div className="text-gray-600 dark:text-gray-300">Transformation, valorisation et mise aux normes de bâtiments anciens ou patrimoniaux.</div>
                    </div>
                  </a>
                  <a href="/prestations-maitre-oeuvre/construction-ecologique" className="block hover:shadow-lg transition-shadow">
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 h-full flex flex-col">
                      <div className="flex items-center mb-4"><span className="text-3xl mr-2">🌱</span><span className="font-bold">Construction écologique</span></div>
                      <div className="text-gray-600 dark:text-gray-300">Habitat durable, matériaux biosourcés, conception bioclimatique, solutions innovantes.</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      <div className="mb-12 md:mb-16 p-4 md:p-8 bg-white dark:bg-slate-900 rounded-xl shadow-sm">
        <SEOFooter 
          text="Construction de petits collectifs résidentiels en PACA par Progineer, maître d'œuvre expert en promotion immobilière à taille humaine. De la conception à la réalisation, nous vous accompagnons dans tous vos projets immobiliers à Marseille, Nice, Toulon et dans toute la région PACA."
          additionalKeywords={[
            "immeubles résidentiels PACA", 
            "petit collectif Marseille", 
            "construction R+2 Nice", 
            "promotion immobilière Toulon", 
            "résidence petit collectif"
          ]}
        />
      </div>
    </>
  );
};
export default PetitCollectif;
