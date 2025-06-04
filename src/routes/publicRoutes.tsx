import React from 'react';
import { RouteObject } from 'react-router-dom';
import Redirect from '../components/common/Redirect';
import Index from '../pages/Index';
import Contact from '../pages/Contact';
import Estimation from '../pages/Estimation';
import Prestations from '../pages/Prestations';
import Realisations from '../pages/Realisations';
import Equipe from '../pages/Equipe';
import Parrainage from '../pages/Parrainage';
import DevenirPartenaire from '../pages/DevenirPartenaire';
import NotFound from '../pages/NotFound';
import Legal from '../pages/Legal';
import CGV from '../pages/CGV';
import FAQ from '../pages/FAQ';
import Sitemap from '../pages/Sitemap';
import SitemapXML from '../pages/SitemapXML';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import CGU from '../pages/CGU';
import VeilleReglementaire from '../pages/VeilleReglementaire';

// Pages dédiées aux prestations
import ConstructionNeuve from '../pages/prestations/ConstructionNeuve';
import Renovation from '../pages/prestations/Renovation';
import Extension from '../pages/prestations/Extension';
import OptimisationEspace from '../pages/prestations/OptimisationEspace';
import DesignInterieur from '../pages/prestations/DesignInterieur';
import MontageAdministratif from '../pages/prestations/MontageAdministratif';
import PetitCollectif from '../pages/prestations/PetitCollectif';
import Rehabilitation from '../pages/prestations/Rehabilitation';
import ConstructionEcologique from '../pages/prestations/ConstructionEcologique';
import RealisationsArchitecturales from '../pages/RealisationsArchitecturales';

// Add a proper route for the HTML sitemap page
export const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Index />
  },
  // Redirections 301 avec messages
  {
    path: "/old-feature",
    element: <Redirect 
      to="/prestations" 
      message="Cette page a été déplacée vers nos prestations."
    />
  },
  {
    path: "/deprecated-page",
    element: <Redirect 
      to="/" 
      message="Cette page n'existe plus. Vous avez été redirigé vers l'accueil."
    />
  },
  {
    path: "/admin-panel",
    element: <Redirect 
      to="/workspace/client-area/admin" 
      message="L'interface d'administration a été déplacée. Redirection vers le nouveau tableau de bord."
    />
  },
  {
    path: "/api/secret-endpoint",
    element: <Redirect 
      to="/" 
      message="Cette ressource n'est plus accessible publiquement."
    />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/estimation",
    element: <Estimation />
  },
  {
    path: "/prestations",
    element: <Prestations />
  },
  // Routes pour les pages spécifiques de prestations
  {
    path: "/prestations/construction-neuve",
    element: <ConstructionNeuve />
  },
  {
    path: "/prestations/renovation",
    element: <Renovation />
  },
  {
    path: "/prestations/extension",
    element: <Extension />
  },
  {
    path: "/prestations/optimisation-espace",
    element: <OptimisationEspace />
  },
  {
    path: "/prestations/design-interieur",
    element: <DesignInterieur />
  },
  {
    path: "/prestations/montage-administratif",
    element: <MontageAdministratif />
  },
  {
    path: "/prestations/petit-collectif",
    element: <PetitCollectif />
  },
  {
    path: "/prestations/rehabilitation",
    element: <Rehabilitation />
  },
  {
    path: "/prestations/construction-ecologique",
    element: <ConstructionEcologique />
  },
  {
    path: "/realisations",
    element: <Realisations />
  },
  {
    path: "/equipe",
    element: <Equipe />
  },
  {
    path: "/parrainage",
    element: <Parrainage />
  },
  {
    path: "/devenir-partenaire",
    element: <DevenirPartenaire />
  },
  {
    path: "/mentions-legales",
    element: <Legal />
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />
  },
  {
    path: "/cgu",
    element: <CGU />
  },
  {
    path: "/cgv",
    element: <CGV />
  },
  {
    path: "/faq",
    element: <FAQ />
  },
  {
    path: "/sitemap",
    element: <Sitemap />
  },
  {
    path: "/sitemap.xml",
    element: <SitemapXML />
  },
  {
    path: "/realisations-architecturales",
    element: <RealisationsArchitecturales />
  },
  // Redirections pour les projets de réalisation qui n'existent plus
  {
    path: "/realisations/extension-contemporaine-aix",
    element: <Redirect 
      to="/realisations" 
      message="Ce projet a été archivé. Découvrez nos autres réalisations."
    />
  },
  {
    path: "/realisations/maison-passive-toulon",
    element: <Redirect 
      to="/realisations" 
      message="Ce projet a été archivé. Découvrez nos autres réalisations."
    />
  },
  {
    path: "/realisations/renovation-haussmannien-marseille",
    element: <Redirect 
      to="/realisations" 
      message="Ce projet a été archivé. Découvrez nos autres réalisations."
    />
  },
  {
    path: "/realisations/maison-contemporaine-vue-panoramique",
    element: <Redirect 
      to="/realisations" 
      message="Ce projet a été archivé. Découvrez nos autres réalisations."
    />
  },
  {
    path: "/realisations/restructuration-friche-lomme",
    element: <Redirect 
      to="/realisations" 
      message="Ce projet a été archivé. Découvrez nos autres réalisations."
    />
  },
  {
    path: "/realisations/logements-collectifs-clermont",
    element: <Redirect 
      to="/realisations" 
      message="Ce projet a été archivé. Découvrez nos autres réalisations."
    />
  },
  {
    path: "/veille-reglementaire",
    element: <VeilleReglementaire />
  },
  {
    path: "/veille-reglementaire/:slug",
    element: <VeilleReglementaire />
  },
  {
    path: "*",
    element: <NotFound />
  }
];
