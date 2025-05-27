import React from 'react';
import Container from '@/components/common/Container';
import SEO from '@/components/common/SEO';
import { InternalLinkText } from '@/utils/internalLinking';
import SEOFooter from '@/components/common/SEOFooter';
import PrestationsSubNav from '@/components/prestations/PrestationsSubNav';

const Rehabilitation = () => {
  return (
    <>
      <SEO
        title="Réhabilitation complète de bâtiments anciens PACA | Progineer"
        description="Experts en réhabilitation de bâtiments anciens ou patrimoniaux en PACA. Redonner vie et fonctionnalité à votre bien tout en préservant son caractère."
        keywords="réhabilitation bâtiment, réhabilitation patrimoine, transformation immeuble, rénovation lourde, PACA"
        canonicalUrl="https://progineer.fr/prestations-maitre-oeuvre/rehabilitation"
      />
      
      {/* Ajout de la navigation secondaire pour les pages de prestation */}
      <PrestationsSubNav activeService="rehabilitation" />
      
      <section className="py-12">
        <Container>
          <h1 className="text-3xl font-bold mb-6">Réhabilitation complète de bâtiments anciens</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Sidebar sticky à gauche */}
            <aside className="lg:col-span-1 flex flex-col gap-6 order-2 lg:order-1">
              {/* Premier bloc sticky */}
              <div className="sticky top-24 bg-stone-50 rounded-xl p-6 shadow-sm mb-0">
                <h2 className="text-2xl font-semibold mb-4">Pourquoi nous choisir ?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start"><span className="text-khaki-600 mr-2 mt-1 text-lg">✓</span><div><h3 className="font-medium text-lg">Expertise réhabilitation</h3><p className="text-sm text-gray-600 dark:text-gray-300">Maîtrise des contraintes techniques et patrimoniales, valorisation du bâti existant.</p></div></li>
                  <li className="flex items-start"><span className="text-khaki-600 mr-2 mt-1 text-lg">✓</span><div><h3 className="font-medium text-lg">Accompagnement global</h3><p className="text-sm text-gray-600 dark:text-gray-300">De l'étude de faisabilité à la réception des travaux, suivi personnalisé.</p></div></li>
                  <li className="flex items-start"><span className="text-khaki-600 mr-2 mt-1 text-lg">✓</span><div><h3 className="font-medium text-lg">Respect du patrimoine</h3><p className="text-sm text-gray-600 dark:text-gray-300">Solutions sur mesure pour préserver et mettre en valeur l'existant.</p></div></li>
                </ul>
                <div className="mt-8 space-y-4">
                  <a href="/estimation" className="relative inline-flex items-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-khaki-600 text-khaki-50 shadow hover:bg-khaki-700 h-10 text-sm px-4 w-full justify-center">Estimer mon projet</a>
                  <a href="/contact" className="relative inline-flex items-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 text-sm px-4 w-full justify-center">Prendre rendez-vous</a>
                </div>
              </div>
              {/* Second bloc non sticky, espacé */}
              <div className="bg-card p-6 rounded-xl shadow-sm border border-border mt-6">
                <h3 className="text-xl font-semibold mb-4">Nos services réhabilitation</h3>
                <ul className="space-y-2">
                  <li className="flex items-start"><span className="text-khaki-600 mr-2">•</span><span>Diagnostic technique et patrimonial</span></li>
                  <li className="flex items-start"><span className="text-khaki-600 mr-2">•</span><span>Conception de projets sur mesure</span></li>
                  <li className="flex items-start"><span className="text-khaki-600 mr-2">•</span><span>Gestion des démarches administratives</span></li>
                  <li className="flex items-start"><span className="text-khaki-600 mr-2">•</span><span>Suivi de chantier et coordination</span></li>
                  <li className="flex items-start"><span className="text-khaki-600 mr-2">•</span><span>Valorisation et mise aux normes</span></li>
                </ul>
                <div className="mt-6 space-y-4">
                  <a href="/estimation" className="relative inline-flex items-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-10 text-sm px-4 w-full justify-center bg-card hover:bg-muted/50">Estimer mon projet</a>
                  <a href="/contact" className="relative inline-flex items-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-10 text-sm px-4 w-full justify-center bg-card hover:bg-muted/50">Prendre rendez-vous</a>
                </div>
              </div>
            </aside>
            {/* Contenu principal à droite */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <InternalLinkText
                    text="La réhabilitation de bâtiments anciens nécessite un savoir-faire spécifique. Progineer assure la réussite de vos projets de réhabilitation en respectant le patrimoine architectural, l'efficacité énergétique et les normes en vigueur. Contactez notre équipe pour une étude personnalisée."
                    className="text-lg text-gray-600 dark:text-gray-300 mb-4"
                    maxOccurrences={2}
                  />
                  <p className="mb-4">
                    Basés en région PACA, nous intervenons sur tous types de bâtiments : immeubles de caractère, 
                    résidences anciennes, locaux commerciaux ou bâtiments industriels à reconvertir.
                  </p>
                  <p className="mb-4">
                    Notre approche de la réhabilitation comprend :
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Diagnostic complet de l'existant et analyse structurelle</li>
                    <li>Valorisation des éléments patrimoniaux</li>
                    <li>Mise aux normes (sécurité, accessibilité, incendie)</li>
                    <li>Rénovation énergétique et phonique</li>
                    <li>Reconfiguration des espaces selon les besoins actuels</li>
                    <li>Suivi et coordination des corps de métier spécialisés</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-4">Défis spécifiques de la réhabilitation</h3>
                  <p className="mb-4">
                    Réhabiliter un bâtiment ancien représente plusieurs défis que notre expertise permet de relever :
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>
                      <strong>Contraintes techniques</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Gestion des structures existantes, parfois fragilisées par le temps</p>
                    </li>
                    <li>
                      <strong>Contraintes réglementaires</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Mise aux normes tout en préservant le caractère du bâtiment</p>
                    </li>
                    <li>
                      <strong>Contraintes patrimoniales</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Respect des éléments historiques et architecturaux</p>
                    </li>
                    <li>
                      <strong>Contraintes énergétiques</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Amélioration significative des performances sans dénaturer</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-4">Spécialiste de la réhabilitation en PACA</h2>
                  <p className="mb-4">
                    La réhabilitation représente bien plus qu'une simple rénovation. Elle implique la renaissance d'un 
                    bâtiment tout en préservant son identité et son caractère.
                  </p>
                  <p className="mb-4">
                    Notre expertise s'étend à plusieurs typologies de projets :
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Réhabilitation d'immeubles en centre-ville</li>
                    <li>Reconversion de bâtiments industriels</li>
                    <li>Revalorisation d'espaces commerciaux</li>
                    <li>Restructuration d'espaces professionnels</li>
                    <li>Rénovation d'appartements et maisons anciennes</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-4">Notre méthodologie de réhabilitation</h3>
                  <ol className="list-decimal pl-6 mb-6 space-y-3">
                    <li>
                      <strong>Étude patrimoniale et historique</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Comprendre l'âme et les spécificités du bâtiment</p>
                    </li>
                    <li>
                      <strong>Diagnostic technique approfondi</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Évaluation des structures, matériaux et réseaux existants</p>
                    </li>
                    <li>
                      <strong>Conception respectueuse</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Design intégrant modernité et respect du patrimoine</p>
                    </li>
                    <li>
                      <strong>Sélection d'entreprises spécialisées</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Collaboration avec des artisans experts en bâti ancien</p>
                    </li>
                    <li>
                      <strong>Suivi renforcé du chantier</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Présence accrue pour gérer les imprévus inhérents à l'ancien</p>
                    </li>
                  </ol>
                  
                  <p className="font-medium">
                    Confiez votre projet de réhabilitation à Progineer pour bénéficier d'un accompagnement 
                    sur mesure et d'une expertise reconnue dans la région PACA.
                  </p>
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
                  <a href="/prestations-maitre-oeuvre/petit-collectif" className="block hover:shadow-lg transition-shadow">
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 h-full flex flex-col">
                      <div className="flex items-center mb-4"><span className="text-3xl mr-2">🏢</span><span className="font-bold">Petit collectif</span></div>
                      <div className="text-gray-600 dark:text-gray-300">Conception et construction d'immeubles résidentiels à taille humaine, optimisation foncière.</div>
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
          text="Réhabilitation de bâtiments anciens en PACA par Progineer, maître d'œuvre spécialisé dans la transformation et la valorisation du patrimoine bâti. Notre expertise technique et notre sensibilité architecturale nous permettent de mener à bien vos projets de réhabilitation à Marseille, Nice, Toulon et dans toute la région PACA."
          additionalKeywords={[
            "réhabilitation immeuble ancien", 
            "transformation bâtiment Marseille", 
            "mise aux normes bâti ancien", 
            "rénovation lourde patrimoine", 
            "reconversion bâtiment PACA"
          ]}
        />
      </div>
    </>
  );
};
export default Rehabilitation;
