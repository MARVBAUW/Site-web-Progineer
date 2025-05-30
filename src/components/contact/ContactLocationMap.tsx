
import React from 'react';
import Container from '@/components/common/Container';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// On réutilise le même tableau de villes que dans LocationMap
const locations = [
  { name: 'Marseille', lat: 43.296482, lng: 5.36978, id: 'marseille-contact' },
  { name: 'Saint-Tropez', lat: 43.2727, lng: 6.6407, id: 'saint-tropez-contact' },
  { name: 'Toulon', lat: 43.1242, lng: 5.9279, id: 'toulon-contact' },
  { name: 'Nice', lat: 43.7102, lng: 7.2620, id: 'nice-contact' },
  { name: 'Cannes', lat: 43.5528, lng: 7.0174, id: 'cannes-contact' },
  { name: 'Fréjus', lat: 43.4331, lng: 6.7370, id: 'frejus-contact' },
  { name: 'Aix-en-Provence', lat: 43.5297, lng: 5.4474, id: 'aix-contact' },
  { name: 'Hyères', lat: 43.1211, lng: 6.1292, id: 'hyeres-contact' }
];

const ContactLocationMap = () => {
  return (
    <section className="py-16 bg-progineer-light/50 dark:bg-slate-800/50 border-t border-progineer-gold/10" id="zones-intervention">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-rare tracking-wide mb-4 text-progineer-dark dark:text-white">Nos zones d'intervention</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Nous intervenons dans toute la région Provence-Alpes-Côte d'Azur
          </p>
        </div>
        
        <div className="h-[400px] bg-card rounded-xl border border-progineer-gold/20 shadow-sm overflow-hidden">
          <MapContainer 
            center={[43.5, 5.9]} 
            zoom={8} 
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locations.map((location, index) => (
              <Marker 
                key={index} 
                position={[location.lat, location.lng]}
              >
                <Popup>
                  <div className="font-medium">{location.name}</div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        
        <div className="mt-10 text-center">
          <h3 className="text-xl font-medium mb-4 text-progineer-dark dark:text-white">Zones d'intervention principales</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {locations.slice(0, 8).map((location, index) => (
              <div key={index} 
                className="p-3 bg-card rounded-lg shadow-sm border border-progineer-gold/10"
                id={location.id}
              >
                <p className="font-medium text-progineer-gold">{location.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">et alentours</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactLocationMap;
