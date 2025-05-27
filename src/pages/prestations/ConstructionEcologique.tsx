import React from 'react';
import Container from '@/components/common/Container';
import SEO from '@/components/common/SEO';
import { InternalLinkText } from '@/utils/internalLinking';
import SEOFooter from '@/components/common/SEOFooter';
import PrestationsSubNav from '@/components/prestations/PrestationsSubNav';

const ConstructionEcologique = () => {
  return (
    <>
      <SEO
        title="Construction écologique et bioclimatique | Maître d'œuvre PACA"
        description="Construction écologique en région PACA : maisons bois, matériaux biosourcés, conception bioclimatique et bâtiments passifs par Progineer, maître d'œuvre éco-responsable."
        keywords="construction écologique, maison bois, matériaux biosourcés, bioclimatique, passif, RE2020, PACA"
        canonicalUrl="https://progineer.fr/prestations-maitre-oeuvre/construction-ecologique"
      />
      
      {/* Ajout de la navigation secondaire pour les pages de prestation */}
      <PrestationsSubNav activeService="construction-ecologique" />
      
      <section className="py-12">
        <Container>
          <h1 className="text-3xl font-bold mb-6">Construction écologique et habitat durable</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Sidebar sticky à gauche */}
            <aside className="lg:col-span-1 flex flex-col gap-6 order-2 lg:order-1">
              {/* Premier bloc sticky */}
              <div className="sticky top-24 bg-stone-50 rounded-xl p-6 shadow-sm mb-0">
                <h2 className="text-2xl font-semibold mb-4">Pourquoi nous choisir ?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start"><span className="text-khaki-600 mr-2 mt-1 text-lg">✓</span><div><h3 className="font-medium text-lg">Expertise écologique</h3><p className="text-sm text-gray-600 dark:text-gray-300">Maîtrise des solutions biosourcées, conception bioclimatique, RE2020 et habitat passif.</p></div></li>
                  <li className="flex items-start"><span className="text-khaki-600 mr-2 mt-1 text-lg">✓</span><div><h3 className="font-medium text-lg">Accompagnement global</h3><p className="text-sm text-gray-600 dark:text-gray-300">De la conception à la livraison, suivi personnalisé et conseils sur les aides écologiques.</p></div></li>
                  <li className="flex items-start"><span className="text-khaki-600 mr-2 mt-1 text-lg">✓</span><div><h3 className="font-medium text-lg">Solutions sur mesure</h3><p className="text-sm text-gray-600 dark:text-gray-300">Adaptation au climat méditerranéen, choix des matériaux, performance et confort.</p></div></li>
                </ul>
                <div className="mt-8 space-y-4">
                  <a href="/estimation" className="relative inline-flex items-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-khaki-600 text-khaki-50 shadow hover:bg-khaki-700 h-10 text-sm px-4 w-full justify-center">Estimer mon projet</a>
                  <a href="/contact" className="relative inline-flex items-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 text-sm px-4 w-full justify-center">Prendre rendez-vous</a>
                </div>
              </div>
              {/* Second bloc non sticky, espacé */}
              <div className="bg-card p-6 rounded-xl shadow-sm border border-border mt-6">
                <h3 className="text-xl font-semibold mb-4">Nos services écologiques</h3>
                <ul className="space-y-2">
                  <li className="flex items-start"><span className="text-khaki-600 mr-2">•</span><span>Construction bois et ossature bois</span></li>
                  <li className="flex items-start"><span className="text-khaki-600 mr-2">•</span><span>Matériaux biosourcés et géosourcés</span></li>
                  <li className="flex items-start"><span className="text-khaki-600 mr-2">•</span><span>Conception bioclimatique et passive</span></li>
                  <li className="flex items-start"><span className="text-khaki-600 mr-2">•</span><span>Énergies renouvelables et gestion de l'eau</span></li>
                  <li className="flex items-start"><span className="text-khaki-600 mr-2">•</span><span>Isolation naturelle et performante</span></li>
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
                    text="Progineer conçoit et réalise des projets de construction écologique, avec une démarche responsable et innovante. Découvrez nos solutions en maison à ossature bois, rénovation énergétique, conception bioclimatique et optimisation d'espace."
                    className="text-lg text-gray-600 dark:text-gray-300 mb-4"
                    maxOccurrences={2}
                  />
                  <p className="mb-4">
                    Dans un contexte où les enjeux environnementaux deviennent primordiaux, nous vous proposons 
                    des solutions constructives innovantes et durables pour votre habitat ou votre entreprise.
                  </p>
                  <p className="mb-4">
                    Notre expertise en construction écologique comprend :
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Construction bois et ossature bois</li>
                    <li>Utilisation de matériaux biosourcés et géosourcés</li>
                    <li>Conception bioclimatique et passive</li>
                    <li>Intégration des énergies renouvelables</li>
                    <li>Récupération et gestion des eaux</li>
                    <li>Solutions d'isolation performantes et naturelles</li>
                  </ul>
                  <h3 className="text-xl font-semibold mt-8 mb-4">Les piliers de notre approche écologique</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">1. La conception bioclimatique</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        Orientation optimisée, protection solaire, ventilation naturelle et inertie thermique pour 
                        minimiser les besoins énergétiques de votre habitation.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">2. Les matériaux sains et durables</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        Sélection de matériaux à faible impact environnemental : bois PEFC/FSC, isolants naturels,
                        peintures et enduits écologiques, etc.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">3. L'efficacité énergétique</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        Conception ultra-performante dépassant les exigences de la RE2020, avec objectif 
                        bâtiment passif ou à énergie positive.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">4. Le confort et la santé</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        Qualité de l'air intérieur, confort thermique été comme hiver, acoustique soignée 
                        et luminosité naturelle optimisée.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-4">Bâtir durablement en région PACA</h2>
                  <p className="mb-4">
                    La construction écologique n'est pas une simple tendance, mais une nécessité pour répondre 
                    aux défis climatiques actuels tout en offrant un confort optimal aux occupants.
                  </p>
                  <p className="mb-4">
                    Nos engagements pour votre projet écologique :
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Respect de la RE2020 et anticipation des futures normes</li>
                    <li>Analyse du cycle de vie des matériaux</li>
                    <li>Optimisation de l'empreinte carbone</li>
                    <li>Adaptabilité aux conditions climatiques méditerranéennes</li>
                    <li>Chantiers à faible impact environnemental</li>
                    <li>Formation des occupants aux bonnes pratiques</li>
                  </ul>
                  <h3 className="text-xl font-semibold mt-8 mb-4">Solutions adaptées au climat méditerranéen</h3>
                  <p className="mb-4">
                    La région PACA présente des spécificités climatiques qui nécessitent des réponses adaptées :
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>
                      <strong>Protection contre la chaleur estivale</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Brise-soleil, casquettes, pergolas bioclimatiques, végétalisation</p>
                    </li>
                    <li>
                      <strong>Gestion de l'eau</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Récupération des eaux pluviales, jardins secs, plantations adaptées</p>
                    </li>
                    <li>
                      <strong>Ventilation naturelle</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Conception favorisant les courants d'air et le rafraîchissement naturel</p>
                    </li>
                    <li>
                      <strong>Isolation renforcée</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Protection contre la chaleur et conservation de la fraîcheur</p>
                    </li>
                  </ul>
                  <p className="font-medium">
                    Faites confiance à Progineer pour concevoir et réaliser votre projet de construction 
                    écologique en région PACA, alliant performance environnementale, confort et esthétique.
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
                  <a href="/prestations-maitre-oeuvre/rehabilitation" className="block hover:shadow-lg transition-shadow">
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 h-full flex flex-col">
                      <div className="flex items-center mb-4"><span className="text-3xl mr-2">🏚️</span><span className="font-bold">Réhabilitation</span></div>
                      <div className="text-gray-600 dark:text-gray-300">Transformation, valorisation et mise aux normes de bâtiments anciens ou patrimoniaux.</div>
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
          text="Construction écologique en région PACA par Progineer, maître d'œuvre spécialisé en habitat durable et éco-construction. Nos solutions innovantes en ossature bois, conception bioclimatique et matériaux biosourcés répondent aux défis environnementaux actuels tout en s'adaptant parfaitement au climat méditerranéen de Marseille, Nice, Toulon et toute la région PACA."
          additionalKeywords={[
            "maison écologique PACA", 
            "construction bois Marseille", 
            "habitat bioclimatique", 
            "matériaux biosourcés méditerranée", 
            "bâtiment basse consommation"
          ]}
        />
      </div>
    </>
  );
};
export default ConstructionEcologique;
