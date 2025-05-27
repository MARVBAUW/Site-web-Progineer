import React from 'react';
import Container from '@/components/common/Container';
import SEO from '@/components/common/SEO';
import { InternalLinkText } from '@/utils/internalLinking';
import SEOFooter from '@/components/common/SEOFooter';
import PrestationsSubNav from '@/components/prestations/PrestationsSubNav';

const MontageAdministratif = () => {
  return (
    <>
      <SEO 
        title="Montage administratif & Permis de construire | Maître d'œuvre PACA"
        description="Expert en montage administratif et permis de construire en région PACA. Accompagnement personnalisé pour tous vos dossiers d'urbanisme à Marseille, Nice et Toulon."
        keywords="montage administratif, permis de construire, dossier urbanisme, maître d'œuvre PACA, autorisation travaux"
        canonicalUrl="https://progineer.fr/prestations-maitre-oeuvre/montage-administratif"
      />
      
      {/* Ajout de la navigation secondaire pour les pages de prestation */}
      <PrestationsSubNav activeService="montage-administratif" />
      
      <section className="py-12">
        <Container>
          <h1 className="text-3xl font-bold mb-6">Montage administratif et permis de construire</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Sidebar sticky à gauche */}
            <aside className="lg:col-span-1 flex flex-col gap-6 order-2 lg:order-1">
              <div className="sticky top-24 bg-stone-50 rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">Pourquoi nous choisir ?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start"><span className="text-khaki-600 mr-2 mt-1 text-lg">✓</span><div><h3 className="font-medium text-lg">Expertise administrative</h3><p className="text-sm text-gray-600 dark:text-gray-300">Maîtrise des démarches, optimisation des dossiers, suivi personnalisé.</p></div></li>
                  <li className="flex items-start"><span className="text-khaki-600 mr-2 mt-1 text-lg">✓</span><div><h3 className="font-medium text-lg">Accompagnement global</h3><p className="text-sm text-gray-600 dark:text-gray-300">De l'analyse réglementaire à l'obtention des autorisations.</p></div></li>
                  <li className="flex items-start"><span className="text-khaki-600 mr-2 mt-1 text-lg">✓</span><div><h3 className="font-medium text-lg">Réactivité & sécurité</h3><p className="text-sm text-gray-600 dark:text-gray-300">Dossiers complets, délais optimisés, minimisation des risques de refus.</p></div></li>
                </ul>
                <div className="mt-8 space-y-4">
                  <a href="/estimation" className="relative inline-flex items-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-khaki-600 text-khaki-50 shadow hover:bg-khaki-700 h-10 text-sm px-4 w-full justify-center">Estimer mon projet</a>
                  <a href="/contact" className="relative inline-flex items-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 text-sm px-4 w-full justify-center">Prendre rendez-vous</a>
                </div>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-sm border border-border mt-6">
                <h3 className="text-xl font-semibold mb-4">Nos services administratifs</h3>
                <ul className="space-y-2">
                  <li className="flex items-start"><span className="text-khaki-600 mr-2">•</span><span>Permis de construire (neuf et existant)</span></li>
                  <li className="flex items-start"><span className="text-khaki-600 mr-2">•</span><span>Déclaration préalable de travaux</span></li>
                  <li className="flex items-start"><span className="text-khaki-600 mr-2">•</span><span>Permis d'aménager</span></li>
                  <li className="flex items-start"><span className="text-khaki-600 mr-2">•</span><span>Dossiers ERP, accessibilité</span></li>
                  <li className="flex items-start"><span className="text-khaki-600 mr-2">•</span><span>Certificats d'urbanisme</span></li>
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
                    text="Progineer vous accompagne dans toutes vos démarches de montage administratif : dépôt de permis de construire, déclaration préalable, autorisations et gestion des formalités auprès des collectivités. Notre équipe de maître d'œuvre à Marseille, Nice ou Toulon optimise votre projet de construction, rénovation, extension ou réhabilitation."
                    maxOccurrences={2}
                    className="text-lg text-gray-600 dark:text-gray-300 mb-4"
                  />
                  <p className="mb-4">
                    La complexité administrative peut rapidement devenir un frein dans votre projet immobilier. 
                    Notre expertise vous permet de vous concentrer sur l'essentiel pendant que nous prenons en charge 
                    toutes les démarches nécessaires.
                  </p>
                  <p className="mb-4">
                    Nos services de montage administratif comprennent :
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Analyse des règlements d'urbanisme applicables</li>
                    <li>Constitution des dossiers administratifs</li>
                    <li>Montage et dépôt des demandes d'autorisation</li>
                    <li>Suivi des demandes auprès des services instructeurs</li>
                    <li>Gestion des modifications éventuelles</li>
                    <li>Obtention des attestations réglementaires</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-4">Pourquoi confier votre montage administratif à un professionnel ?</h3>
                  <p className="mb-4">
                    Les démarches administratives liées à un projet de construction ou de rénovation peuvent être 
                    complexes et chronophages. Faire appel à un expert comme Progineer vous assure :
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Un gain de temps considérable</li>
                    <li>Une minimisation des risques de refus</li>
                    <li>Une optimisation de votre projet selon les contraintes locales</li>
                    <li>Un suivi personnalisé auprès des services instructeurs</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-4">Expertise règlementaire en PACA</h2>
                  <p className="mb-4">
                    Notre connaissance approfondie des règlements d'urbanisme de la région PACA nous permet 
                    d'optimiser votre projet tout en respectant les contraintes locales.
                  </p>
                  <p className="mb-4">
                    Nous vous assistons pour tous types de dossiers :
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Permis de construire pour construction neuve</li>
                    <li>Permis de construire pour travaux sur existant</li>
                    <li>Déclaration préalable de travaux</li>
                    <li>Permis d'aménager</li>
                    <li>Dossiers spécifiques (ERP, accessibilité, etc.)</li>
                    <li>Obtention des certificats d'urbanisme</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-4">Notre méthodologie pour votre dossier</h3>
                  <ol className="list-decimal pl-6 mb-6 space-y-3">
                    <li>
                      <strong>Analyse préalable</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Étude du PLU, des servitudes et des contraintes particulières</p>
                    </li>
                    <li>
                      <strong>Conception adaptée</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Ajustement du projet pour optimiser les chances d'acceptation</p>
                    </li>
                    <li>
                      <strong>Constitution du dossier</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Préparation des pièces graphiques et documents administratifs</p>
                    </li>
                    <li>
                      <strong>Dépôt et suivi</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Accompagnement jusqu'à l'obtention de l'autorisation</p>
                    </li>
                  </ol>
                  
                  <p className="font-medium">
                    Simplifiez vos démarches administratives en confiant votre projet à Progineer, 
                    expert en montage administratif en région PACA.
                  </p>
                </div>
              </div>
              {/* Ajout de la section cards de prestations */}
              <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-6">Découvrez aussi nos autres prestations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Cards inspirées de /prestations-maitre-oeuvre */}
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
                  <a href="/prestations-maitre-oeuvre/petit-collectif" className="block hover:shadow-lg transition-shadow">
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 h-full flex flex-col">
                      <div className="flex items-center mb-4"><span className="text-3xl mr-2">🏢</span><span className="font-bold">Petit collectif</span></div>
                      <div className="text-gray-600 dark:text-gray-300">Conception et construction d'immeubles résidentiels à taille humaine, optimisation foncière.</div>
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
      
      <SEOFooter 
        text="Montage administratif et permis de construire en région PACA par Progineer, maître d'œuvre spécialisé dans les démarches d'urbanisme. Notre expertise vous garantit une gestion optimale de vos dossiers administratifs à Marseille, Nice, Toulon et dans toute la région Provence-Alpes-Côte d'Azur."
        additionalKeywords={[
          "permis de construire PACA", 
          "déclaration préalable Marseille", 
          "dossier urbanisme Nice", 
          "autorisation travaux Toulon", 
          "montage administratif construction"
        ]}
      />
    </>
  );
};
export default MontageAdministratif;
