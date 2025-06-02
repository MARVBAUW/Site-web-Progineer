import React, { useEffect, useState, memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/common/Button';
import Logo from '@/components/common/Logo';

const villes = [
  'Marseille', 'Nice', 'Cannes', 'Saint-Raphaël', 'Saint-Tropez', 'Fréjus',
  'Mougins', 'Sainte-Maxime', 'Aix-en-Provence', 'Avignon', 'Arles', 'Toulon',
  'Menton', 'Antibes', 'Grasse', 'Hyères', 'La Seyne-sur-Mer', 'Draguignan',
  'Le Lavandou', 'Bandol', 'Sanary-sur-Mer', 'La Ciotat', 'Cassis', 'Beaulieu-sur-Mer',
  'Roquebrune-Cap-Martin', 'Vence', 'Villeneuve-Loubet', 'Juan-les-Pins', 'Saint-Laurent-du-Var',
  'Six-Fours-les-Plages', 'Brignoles', 'Vidauban', 'Le Muy', 'Puget-sur-Argens', 'Les Arcs',
  'Le Cannet', 'Mandelieu-la-Napoule', 'Roquebrune-sur-Argens', 'Carqueiranne', 'La Garde',
  'La Valette-du-Var', 'Saint-Maximin-la-Sainte-Baume', 'Trets', 'Gardanne', 'Aubagne',
  'Allauch', 'Plan-de-Cuques', 'Gémenos', 'Carnoux-en-Provence', 'Roquevaire', 'Auriol',
  'Saint-Cyr-sur-Mer', 'La Londe-les-Maures', 'Bormes-les-Mimosas', 'Cogolin', 'Gassin',
  'Ramatuelle', 'Le Plan-de-la-Tour', 'Sainte-Maxime', 'Les Issambres', 'Le Pradet',
  'Ollioules', 'La Crau', 'Cuers', 'Solliès-Pont', 'Solliès-Toucas', 'Solliès-Ville',
  'Pierrefeu-du-Var', 'Collobrières', 'Pignans', 'Gonfaron', 'Le Luc', 'Le Thoronet',
  'Lorgues', 'Flayosc', 'Salernes', 'Aups', 'Villecroze', 'Tourtour', 'Cotignac',
  'Barjols', 'Rians', 'Saint-Maximin-la-Sainte-Baume', 'Pourrières', 'Pourcieux',
  'Saint-Zacharie', 'Nans-les-Pins', 'Signes', 'Evenos', 'Le Beausset', "La Cadière-d'Azur",
  "Le Castellet", "Saint-Anne-d'Evenos", 'Bandol', 'Sanary-sur-Mer', 'Six-Fours-les-Plages',
  'La Seyne-sur-Mer', 'Toulon', 'Hyères', 'Le Lavandou', 'Bormes-les-Mimosas', 'La Londe-les-Maures',
  'Pierrefeu-du-Var', 'Cuers', 'La Crau', 'Carqueiranne', 'Le Pradet', 'La Garde', 'La Valette-du-Var',
  'Solliès-Pont', 'Solliès-Toucas', 'Solliès-Ville', 'Collobrières', 'Pignans', 'Gonfaron', 'Le Luc',
  'Le Thoronet', 'Vidauban', 'Les Arcs', 'Le Muy', 'Trans-en-Provence', 'Draguignan', 'Flayosc',
  'Lorgues', 'Taradeau', 'Les Mayons', 'Le Cannet-des-Maures', 'Le Cannet', 'Mandelieu-la-Napoule',
  'Grasse', 'Antibes', 'Juan-les-Pins', 'Vallauris', 'Cagnes-sur-Mer', 'Saint-Laurent-du-Var',
  'Villeneuve-Loubet', 'Vence', 'Beaulieu-sur-Mer', 'Saint-Jean-Cap-Ferrat', 'Eze', 'Cap-d\'Ail',
  'Roquebrune-Cap-Martin', 'Menton'
];
const typesProjet = ['Rénovation', 'Construction'];

// Helper pour extraire la ville de la query string ou du referrer
function getVilleFromSearch() {
  const params = new URLSearchParams(window.location.search);
  const q = params.get('q')?.toLowerCase() || '';
  for (const ville of villes) {
    if (q.includes(ville.toLowerCase().replace(/é/g, 'e').replace(/è/g, 'e').replace(/ô/g, 'o').replace(/ /g, '-'))) {
      return ville;
    }
  }
  const ref = document.referrer.toLowerCase();
  for (const ville of villes) {
    if (ref.includes(ville.toLowerCase().replace(/é/g, 'e').replace(/è/g, 'e').replace(/ô/g, 'o').replace(/ /g, '-'))) {
      return ville;
    }
  }
  return null;
}

// Helper pour extraire la ville de l'URL si présente
function getVilleFromURL() {
  const url = window.location.pathname.toLowerCase();
  for (const ville of villes) {
    if (url.includes(ville.toLowerCase().replace(/é/g, 'e').replace(/è/g, 'e').replace(/ô/g, 'o').replace(/ /g, '-'))) {
      return ville;
    }
  }
  return null;
}

const HeroContent = memo(() => {
  const [ville, setVille] = useState('Marseille');
  const [typeProjet, setTypeProjet] = useState('Construction et Rénovation');

  useEffect(() => {
    // Charger les données de manière asynchrone après le rendu initial
    requestAnimationFrame(() => {
      let villeUser = getVilleFromSearch();
      if (!villeUser) {
        villeUser = getVilleFromURL();
      }
      if (!villeUser) {
        villeUser = window.localStorage.getItem('villeUser');
      }
      if (villeUser && villes.includes(villeUser)) {
        setVille(villeUser);
      }
      const typeUser = window.localStorage.getItem('typeProjetUser') || typesProjet[Math.floor(Math.random() * typesProjet.length)];
      if (typesProjet.includes(typeUser)) {
        setTypeProjet(typeUser);
      }
    });
  }, []);

  return (
    <div className="flex flex-col items-start">
      <div className="w-full flex justify-center mb-12">
        <Logo variant="metallic-full" size="lg" className="mx-auto" />
      </div>
      
      <div className="inline-block px-3 py-1 mb-6 rounded-full bg-progineer-gold/30 backdrop-blur-sm text-white text-sm font-medium">
        Architecte & Maître d'œuvre PACA
      </div>
      
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-rare tracking-wide text-white leading-tight mb-6 text-left">
        Maître d&apos;œuvre &amp; Architecte à Marseille,<br />
        Cannes, Saint-Tropez, Fréjus<br />
        Spécialiste Construction et Rénovation
      </h2>
      
      <p className="text-base md:text-lg text-white/90 mb-8 max-w-2xl text-left">
        Cabinet d'architecture et constructeur-maître d'œuvre spécialisé en conception et réalisation 
        de maisons individuelles. Expertise technique et coordination complète pour vos projets à Marseille.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          href="/estimation" 
          size="lg" 
          variant="estimation" 
          className="font-medium backdrop-blur-sm border-white/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all duration-300"
        >
          Estimer mon projet
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button 
          href="/prestations" 
          variant="outline" 
          size="lg" 
          className="bg-card/10 border-white/30 text-white hover:bg-card/20 backdrop-blur-sm"
        >
          Découvrir nos prestations
        </Button>
      </div>
    </div>
  );
});

HeroContent.displayName = 'HeroContent';

export default HeroContent;
