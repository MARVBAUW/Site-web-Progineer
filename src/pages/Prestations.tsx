import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Construction, Wrench, Settings, Plus, Info, ChevronDown, ChevronUp } from 'lucide-react';
import PrestationsSubNav from '@/components/prestations/PrestationsSubNav';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { InternalLinkText } from '@/utils/internalLinking';
import SEOFooter from '@/components/common/SEOFooter';
import { EnhancedSEO } from '@/components/seo/EnhancedSEO';

// Define service categories
const services = [
  {
    id: 'construction',
    slug: 'construction-neuve',
    icon: <Building className="h-10 w-10 text-khaki-600" />,
    title: 'Construction sur mesure',
    description: 'Construction de maisons individuelles et petits collectifs parfaitement adaptés à vos besoins et à votre terrain.',
    features: [
      'Étude de faisabilité complète',
      'Conception architecturale personnalisée',
      'Optimisation des coûts et des délais',
      'Coordination des artisans et suivi de chantier',
      'Gestion administrative (permis de construire, déclarations)',
      'Garantie de livraison dans les délais convenus'
    ],
    detailedContent: `Notre service de construction sur mesure est conçu pour transformer vos idées en réalité concrète. 
      Nous prenons en compte chaque détail de votre projet, depuis l'étude de faisabilité jusqu'à la livraison finale.
      
      Notre équipe d'architectes et d'ingénieurs élabore des plans personnalisés qui respectent vos besoins, vos goûts et votre budget.
      Nous privilégions les matériaux durables et les techniques de construction innovantes pour garantir une qualité optimale.
      
      Tout au long du projet, nous assurons une communication transparente et régulière pour vous tenir informé de l'avancement des travaux.
      Nous nous occupons de toutes les démarches administratives, y compris l'obtention du permis de construire et les différentes autorisations nécessaires.`
  },
  {
    id: 'renovation',
    slug: 'renovation',
    icon: <Wrench className="h-10 w-10 text-khaki-600" />,
    title: 'Rénovation énergétique',
    description: 'Améliorez la performance énergétique de votre logement tout en valorisant votre patrimoine immobilier.',
    features: [
      'Audit énergétique complet',
      'Diagnostic de Performance Énergétique (DPE)',
      'Solutions adaptées aux normes RE2020',
      'Accompagnement aux aides financières (MaPrimeRénov, CEE)',
      'Isolation thermique et phonique',
      'Installation de systèmes de chauffage écologiques'
    ],
    detailedContent: `Notre service de rénovation énergétique est une solution complète pour améliorer l'efficacité énergétique de votre logement.
      Nous commençons par un audit énergétique approfondi pour identifier les points faibles de votre habitat.
      
      Notre équipe propose ensuite des solutions adaptées à votre budget et à vos objectifs d'économie d'énergie:
      - Isolation des combles, murs et planchers
      - Remplacement des fenêtres et portes
      - Installation de systèmes de chauffage performants
      - Mise en place de ventilation efficace
      
      Nous vous accompagnons dans toutes les démarches pour obtenir les aides financières auxquelles vous avez droit,
      comme MaPrimeRénov', les Certificats d'Économie d'Énergie (CEE), l'éco-prêt à taux zéro et les aides locales.
      
      Nos travaux respectent scrupuleusement les normes en vigueur, notamment la RE2020, pour garantir des performances optimales.`
  },
  {
    id: 'extension',
    slug: 'extension',
    icon: <Plus className="h-10 w-10 text-khaki-600" />,
    title: 'Extension & agrandissement',
    description: 'Agrandissez votre espace de vie avec une extension harmonieuse et parfaitement intégrée à votre habitat existant.',
    features: [
      'Étude d\'intégration architecturale',
      'Optimisation de la liaison avec l\'existant',
      'Conception sur mesure (véranda, surélévation, extension latérale)',
      'Gestion des contraintes techniques et réglementaires',
      'Choix de matériaux durables et écologiques',
      'Optimisation de l\'apport lumineux naturel'
    ],
    detailedContent: `Notre service d'extension et d'agrandissement vous permet d'augmenter votre surface habitable tout en valorisant votre bien immobilier.
      Nous concevons des extensions qui s'intègrent harmonieusement à l'architecture existante de votre maison.
      
      Nos solutions d'agrandissement comprennent:
      - Les extensions horizontales classiques
      - Les surélévations pour ajouter un étage
      - Les vérandas et jardins d'hiver
      - Les aménagements de combles ou de sous-sols
      
      Chaque projet est unique et bénéficie d'une étude personnalisée pour optimiser l'espace, la luminosité et la circulation.
      Nous accordons une attention particulière à la jonction entre le bâtiment existant et la nouvelle extension pour assurer une transition fluide et esthétique.
      
      Nos équipes gèrent l'ensemble des démarches administratives et techniques, depuis le dépôt du permis de construire jusqu'à la livraison finale.`
  },
  {
    id: 'optimisation',
    slug: 'optimisation-espace',
    icon: <Settings className="h-10 w-10 text-khaki-600" />,
    title: 'Optimisation d\'espace',
    description: 'Maximisez le potentiel de votre surface habitable grâce à des solutions d\'aménagement intelligentes et fonctionnelles.',
    features: [
      'Analyse fonctionnelle des espaces',
      'Réagencement optimal des pièces',
      'Solutions de rangement intégrées',
      'Création de mezzanines ou d\'espaces modulables',
      'Optimisation des circulations',
      'Amélioration de l\'ergonomie du logement'
    ],
    detailedContent: `Notre service d'optimisation d'espace transforme votre intérieur pour exploiter pleinement chaque mètre carré disponible.
      Nous analysons vos habitudes de vie et vos besoins pour créer un aménagement sur mesure qui optimise la fonctionnalité de votre habitat.
      
      Nos solutions comprennent:
      - La réorganisation des cloisons et des circulations
      - La création de rangements intelligents et intégrés
      - L'installation de meubles multifonctions
      - L'aménagement d'espaces modulables adaptables à différents usages
      - La création de mezzanines pour gagner de la surface
      
      Nos architectes d'intérieur conçoivent des solutions ergonomiques qui facilitent votre quotidien tout en valorisant l'esthétique de votre logement.
      Nous portons une attention particulière à la lumière naturelle et aux perspectives visuelles pour créer une sensation d'espace et de confort.`
  },
  {
    id: 'design',
    slug: 'design-interieur',
    icon: <Construction className="h-10 w-10 text-khaki-600" />,
    title: 'Design d\'espace',
    description: 'Créez des intérieurs esthétiques et fonctionnels qui reflètent votre personnalité et votre mode de vie.',
    features: [
      'Conception d\'intérieur personnalisée',
      'Choix des matériaux et des finitions',
      'Plans d\'aménagement détaillés',
      'Conseils en décoration et mobilier',
      'Moodboards et visualisations 3D',
      'Suivi de la mise en œuvre'
    ],
    detailedContent: `Notre service de design d'espace crée des intérieurs qui vous ressemblent, alliant esthétique, fonctionnalité et confort.
      Nos designers d'intérieur travaillent en étroite collaboration avec vous pour comprendre vos goûts, vos besoins et votre style de vie.
      
      Notre approche comprend:
      - L'analyse de vos espaces et de vos besoins
      - La création de planches d'ambiance (moodboards)
      - La sélection des matériaux, couleurs et finitions
      - Le choix du mobilier et des éléments décoratifs
      - La conception d'éclairages adaptés à chaque espace
      - La réalisation de visualisations 3D pour vous projeter dans votre futur intérieur
      
      Nous accordons une attention particulière à la cohérence entre les différents espaces de votre logement pour créer une harmonie visuelle.
      Notre objectif est de concevoir des espaces qui non seulement vous plaisent esthétiquement, mais qui améliorent également votre qualité de vie au quotidien.`
  },
  {
    id: 'administratif',
    slug: null, // Pas de page dédiée
    icon: <Info className="h-10 w-10 text-khaki-600" />,
    title: 'Montage administratif',
    description: 'Simplifiez vos démarches administratives grâce à notre accompagnement expert pour tous vos projets de construction.',
    features: [
      'Élaboration des dossiers de permis de construire',
      'Déclarations préalables de travaux',
      'Accompagnement aux autorisations d\'urbanisme',
      'Suivi des délais d\'instruction',
      'Assistance aux recours éventuels',
      'Relations avec les services d\'urbanisme'
    ],
    detailedContent: `Notre service de montage administratif vous libère des contraintes bureaucratiques liées à votre projet de construction ou de rénovation.
      Nous prenons en charge l'ensemble des démarches administratives, depuis la préparation des dossiers jusqu'à l'obtention des autorisations.
      
      Notre accompagnement comprend:
      - L'analyse des règles d'urbanisme applicables à votre projet
      - La préparation complète des dossiers de permis de construire ou de déclaration préalable
      - La rédaction des notices techniques et descriptives
      - Le dépôt des dossiers auprès des services compétents
      - Le suivi de l'instruction et les réponses aux demandes complémentaires
      - L'assistance en cas de recours ou de difficultés particulières
      
      Notre expertise des réglementations et notre connaissance des procédures administratives nous permettent d'optimiser les délais et de sécuriser l'obtention de vos autorisations.
      Nous nous chargeons également des déclarations d'ouverture et d'achèvement de chantier, ainsi que de l'obtention du certificat de conformité.`
  },
  {
    id: 'petit-collectif',
    slug: 'petit-collectif',
    icon: <span className="text-3xl">🏢</span>,
    title: 'Petit collectif',
    description: "Conception et construction d'immeubles résidentiels à taille humaine.",
    features: [
      'Optimisation foncière',
      'Conception sur mesure',
      'Gestion administrative',
      'Suivi de chantier',
      'Respect des normes environnementales'
    ],
    detailedContent: `Progineer accompagne les promoteurs et investisseurs dans la réalisation de petits collectifs résidentiels en région PACA. Nous intervenons de l'avant-projet à la livraison, incluant le montage administratif, la construction neuve ou la réhabilitation. Notre expertise garantit des projets respectant les contraintes économiques, réglementaires et une intégration harmonieuse dans le tissu urbain.`
  },
  {
    id: 'rehabilitation',
    slug: 'rehabilitation',
    icon: <span className="text-3xl">🏚️</span>,
    title: 'Réhabilitation',
    description: 'Transformation et valorisation de bâtiments anciens ou patrimoniaux.',
    features: [
      'Diagnostic technique',
      'Valorisation patrimoniale',
      'Mise aux normes',
      'Rénovation énergétique',
      'Coordination des travaux'
    ],
    detailedContent: `Notre équipe assure la réhabilitation complète de bâtiments anciens, en préservant leur caractère tout en les adaptant aux usages modernes. Diagnostic complet, valorisation patrimoniale, mise aux normes, rénovation énergétique et coordination des travaux spécialisés.`
  },
  {
    id: 'construction-ecologique',
    slug: 'construction-ecologique',
    icon: <span className="text-3xl">🌱</span>,
    title: 'Construction écologique',
    description: 'Habitat durable, matériaux biosourcés, conception bioclimatique.',
    features: [
      'Construction bois',
      'Matériaux biosourcés',
      'Conception bioclimatique',
      'Énergies renouvelables',
      'Isolation performante'
    ],
    detailedContent: `Progineer conçoit et réalise des projets de construction écologique, avec une démarche responsable et innovante. Construction bois, matériaux biosourcés, conception bioclimatique, intégration des énergies renouvelables et solutions d'isolation performantes.`
  },
];

const Prestations = () => {
  const location = useLocation();
  const [openServiceId, setOpenServiceId] = useState<string | null>(null);
  
  // Scroll to hash on initial load and hash changes
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const toggleService = (id: string) => {
    setOpenServiceId(openServiceId === id ? null : id);
  };

  return (
    <>
      <EnhancedSEO 
        title="Architecte & Constructeur PACA | Prestations Maîtrise d'œuvre Marseille | Progineer"
        description="Découvrez nos prestations complètes de maîtrise d'œuvre : construction neuve, rénovation, extension, optimisation d'espace et design d'intérieur. Expertise architecturale et coordination de projets en PACA."
        keywords={[
          "maîtrise d'œuvre PACA",
          "architecte Marseille",
          "construction neuve",
          "rénovation énergétique",
          "extension maison",
          "optimisation espace",
          "design intérieur",
          "permis de construire"
        ]}
        url="https://progineer.fr/prestations"
        schemaData={{
          type: "ItemList",
          name: "Prestations de Maîtrise d'œuvre Progineer",
          description: "Liste des services de maîtrise d'œuvre proposés par Progineer en région PACA",
          url: "https://progineer.fr/prestations",
          itemListElement: services.map((service, index) => ({
            "@type": "Service",
            "position": index + 1,
            "name": service.title,
            "description": service.description,
            "url": service.slug ? `https://progineer.fr/prestations/${service.slug}` : undefined
          }))
        }}
      />

      <main>
        <div className="sr-only" role="heading" aria-level={1}>
          Prestations de Maîtrise d'œuvre Progineer - Architecte et Constructeur en PACA
        </div>

        {/* Hero section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-khaki-50 to-white" id="overview">
          <Container size="md">
            <div className="text-center">
              <div className="inline-block px-3 py-1 mb-6 rounded-full bg-khaki-100 text-khaki-800 text-sm font-medium">
                Nos prestations
              </div>
              <h1 className="text-4xl md:text-5xl font-semibold mb-6">
                Services de maîtrise d'œuvre en PACA
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                <InternalLinkText 
                  text="De la conception à la réalisation, Progineer vous accompagne dans tous vos projets de construction, rénovation et aménagement en région PACA."
                  maxOccurrences={2}
                />
              </p>
            </div>
          </Container>
        </section>

        {/* Sub-navigation */}
        <PrestationsSubNav />

        {/* Services Overview */}
        <section className="py-16">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service) => {
                return (
                  <Card key={service.id} id={service.id} className="border-border hover:shadow-md transition-shadow duration-300 scroll-mt-32">
                    <CardHeader>
                      <div className="mb-4">{service.icon}</div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300">
                        <InternalLinkText text={service.description} maxOccurrences={1} />
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2 mt-1 text-khaki-600">•</span>
                            <span><InternalLinkText text={feature} /></span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <div className="flex flex-col w-full gap-2">
                        {service.slug ? (
                          <Button
                            href={`/prestations/${service.slug}`}
                            className="w-full justify-center flex items-center"
                            variant="outline"
                          >
                            En savoir plus
                          </Button>
                        ) : (
                          <Button
                            href="/contact"
                            className="w-full justify-center flex items-center"
                            variant="outline"
                          >
                            En savoir plus
                          </Button>
                        )}

                        <Collapsible 
                          className="w-full" 
                          open={openServiceId === service.id}
                          onOpenChange={() => toggleService(service.id)}
                        >
                          <CollapsibleTrigger className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
                            {openServiceId === service.id ? (
                              <>Voir moins <ChevronUp className="ml-2 h-4 w-4" /></>
                            ) : (
                              <>Détails <ChevronDown className="ml-2 h-4 w-4" /></>
                            )}
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-4">
                            <div className="p-4 bg-khaki-50 rounded-lg">
                              <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                                <InternalLinkText text={service.detailedContent} maxOccurrences={3} />
                              </p>
                              <div className="mt-4">
                                <Button href="/contact" className="w-full sm:w-auto justify-center mt-2">
                                  Demander un devis
                                </Button>
                              </div>
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      </div>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-stone-50 border-y border-stone-100">
          <Container>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl font-semibold mb-6">Notre processus d'accompagnement</h2>
              <p className="text-gray-600 dark:text-gray-300">
                <InternalLinkText 
                  text="Une méthodologie éprouvée pour mener à bien votre projet, de la première idée à la livraison finale."
                  maxOccurrences={1}
                />
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="relative p-6 bg-card rounded-xl shadow-sm border border-border">
                <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-khaki-600 text-white flex items-center justify-center font-semibold text-lg">1</div>
                <h3 className="text-xl font-semibold mb-3 mt-2">Consultation initiale</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  <InternalLinkText 
                    text="Nous écoutons vos besoins, analysons votre projet et définissons ensemble les grandes lignes de votre projet."
                    maxOccurrences={1}
                  />
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative p-6 bg-card rounded-xl shadow-sm border border-border">
                <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-khaki-600 text-white flex items-center justify-center font-semibold text-lg">2</div>
                <h3 className="text-xl font-semibold mb-3 mt-2">Étude et conception</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  <InternalLinkText 
                    text="Nous élaborons les plans, estimons les coûts et proposons des solutions techniques adaptées à votre budget."
                    maxOccurrences={1}
                  />
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative p-6 bg-card rounded-xl shadow-sm border border-border">
                <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-khaki-600 text-white flex items-center justify-center font-semibold text-lg">3</div>
                <h3 className="text-xl font-semibold mb-3 mt-2">Réalisation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  <InternalLinkText 
                    text="Nous coordonnons les différents corps de métier et veillons au respect du calendrier et de la qualité d'exécution."
                    maxOccurrences={1}
                  />
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative p-6 bg-card rounded-xl shadow-sm border border-border">
                <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-khaki-600 text-white flex items-center justify-center font-semibold text-lg">4</div>
                <h3 className="text-xl font-semibold mb-3 mt-2">Livraison et suivi</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  <InternalLinkText 
                    text="Nous effectuons la réception des travaux et assurons un suivi post-livraison pour garantir votre entière satisfaction."
                    maxOccurrences={1}
                  />
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <Container>
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-6">Pourquoi choisir Progineer ?</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-khaki-100 flex items-center justify-center mr-4 shrink-0">
                      <span className="text-khaki-800 font-semibold">01</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Expertise technique</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        <InternalLinkText 
                          text="Notre équipe combine des compétences en architecture, ingénierie et gestion de projet pour une approche complète et efficace."
                          maxOccurrences={1}
                        />
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-khaki-100 flex items-center justify-center mr-4 shrink-0">
                      <span className="text-khaki-800 font-semibold">02</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Communication transparente</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        <InternalLinkText 
                          text="Nous vous tenons informés à chaque étape de l'avancement de votre projet et restons disponibles pour répondre à vos questions."
                          maxOccurrences={1}
                        />
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-khaki-100 flex items-center justify-center mr-4 shrink-0">
                      <span className="text-khaki-800 font-semibold">03</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Maîtrise des coûts</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        <InternalLinkText 
                          text="Nos méthodes de travail optimisées nous permettent de respecter scrupuleusement les budgets établis, sans mauvaises surprises."
                          maxOccurrences={1}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="h-full rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80&w=3512&auto=format&fit=crop" 
                    alt="Architecture moderne" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA section */}
        <section className="py-16 bg-khaki-600 text-white">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-semibold mb-6">
                Prêt à concrétiser votre projet ?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                <InternalLinkText 
                  text="Contactez notre équipe pour discuter de vos besoins et obtenir un devis personnalisé."
                  maxOccurrences={1}
                  className="text-white"
                />
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  href="/estimation" 
                  className="bg-card text-khaki-800 hover:bg-card/90"
                >
                  Estimer mon projet
                </Button>
                <Button 
                  href="/contact" 
                  variant="outline" 
                  className="border-white/30 bg-transparent hover:bg-card/10"
                >
                  Nous contacter
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">Questions fréquentes</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                <InternalLinkText 
                  text="Vous avez des questions sur nos services ? Consultez nos réponses ci-dessous ou contactez-nous directement."
                  maxOccurrences={1}
                />
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-3">Quelle est la différence entre un maître d'œuvre et un architecte ?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  <InternalLinkText 
                    text="Le maître d'œuvre, comme Progineer, coordonne et supervise l'ensemble du projet de construction, tandis que l'architecte se concentre davantage sur la conception. Nous travaillons en collaboration avec des architectes lorsque nécessaire pour certains projets."
                    maxOccurrences={2}
                  />
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-3">Quel est le délai moyen pour un projet de construction ?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  <InternalLinkText 
                    text="Les délais varient selon la nature et l'ampleur du projet. Pour une maison individuelle, comptez environ 8 à 12 mois entre la conception et la livraison. Une extension prend généralement 4 à 6 mois, et une rénovation 2 à 6 mois selon sa complexité."
                    maxOccurrences={2}
                  />
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-3">Quelles garanties offrez-vous sur vos prestations ?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  <InternalLinkText 
                    text="Nous sommes couverts par une assurance décennale et une responsabilité civile professionnelle. De plus, nous garantissons la conformité des travaux avec les plans et le respect des normes en vigueur, notamment la RE2020."
                    maxOccurrences={2}
                  />
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-3">Intervenez-vous sur toute la région PACA ?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  <InternalLinkText 
                    text="Oui, nous intervenons dans toute la région Provence-Alpes-Côte d'Azur, notamment à Marseille, Toulon, Nice, Cannes, Saint-Tropez, Fréjus et leurs environs. N'hésitez pas à nous contacter pour vérifier notre disponibilité dans votre zone."
                    maxOccurrences={2}
                  />
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-3">Quels types de travaux réalisez-vous ?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  <InternalLinkText 
                    text="Nous réalisons tous types de travaux : travaux de construction neuve, travaux de rénovation complète, travaux d'extension et travaux d'aménagement. En tant que constructeur de maison et maître d'œuvre, nous coordonnons l'ensemble des corps de métier pour vos travaux, depuis les travaux de gros œuvre jusqu'aux travaux de finition."
                    maxOccurrences={2}
                  />
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-3">Comment estimez-vous le coût des travaux ?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  <InternalLinkText 
                    text="L'estimation des travaux prend en compte plusieurs facteurs : la nature des travaux, la surface concernée, la qualité des matériaux et la complexité technique. Nos devis détaillent chaque poste de travaux pour une transparence totale sur le coût de vos travaux."
                    maxOccurrences={2}
                  />
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <Link to="/faq" className="text-khaki-600 hover:text-khaki-800 font-medium">
                Voir toutes les questions fréquentes →
              </Link>
            </div>
          </Container>
        </section>

        {/* SEO Footer renforcé */}
        <SEOFooter 
          text="Architecte-constructeur et maître d'œuvre à Marseille et en PACA – Cabinet d'architecture spécialisé en construction de maisons individuelles sur mesure, travaux de rénovation énergétique et extension. Nos architectes et constructeurs de maison assurent la maîtrise d'œuvre complète de vos travaux. Optimisation des espaces, design architectural et montage administratif pour particuliers et professionnels dans toute la région Provence-Alpes-Côte d'Azur."
          additionalKeywords={[
            "travaux construction", 
            "travaux de rénovation", 
            "constructeur de maison", 
            "architecte constructeur PACA", 
            "constructeur maison individuelle", 
            "travaux maison individuelle", 
            "architecte marseille", 
            "cabinet architecture marseille"
          ]}
        />
      </main>
    </>
  );
};

export default Prestations;
