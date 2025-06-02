export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Marvin Bauwens",
    role: "Fondateur & Maître d'œuvre",
    image: "/images/prestations/3f77f084-4061-4e36-9f32-85cb08372b51_resultat.webp",
    bio: "Diplômé d'un master en génie civil décerné par l'INSA, Marvin a ensuite acquis de l'expérience dans divers corps de métiers. Il a notamment été représentant de la maîtrise d'ouvrage pour une foncière nationale d'envergure, ainsi que chef de projet de maîtrise d'œuvre. Missionné pour gérer les actifs immobiliers de différentes entités, Marvin a démontré son efficacité tant dans la conception que dans le suivi opérationnel des travaux, apportant une réelle valeur ajoutée à chaque étape du projet.",
    skills: ["Expertise technique", "Gestion de projet", "Coordination", "Pilotage travaux"]
  },
  {
    id: 2,
    name: "Maël Allano",
    role: "Cofondateur & Maître d'œuvre",
    image: "/images/prestations/23fe2b30-1f84-472d-a3c8-d4c413ffbbc4_resultat.webp",
    bio: "Également diplômé du master en génie civil de l'INSA, Maël a débuté comme chef de chantier dans une entreprise de second œuvre. Développant les aspects techniques au niveau des finitions du bâtiment, il s'est ensuite orienté vers une entreprise générale du bâtiment spécialisée dans l'industrie et le tertiaire, en tant que chargé d'études de prix et d'analyse de structure. Maël a su diversifier son panel de connaissances et acquérir une vision globale de l'étude et de la réalisation de divers types de projets.",
    skills: ["Finitions", "Études de prix", "Analyse de structure", "Conduite de chantier"]
  }
]; 