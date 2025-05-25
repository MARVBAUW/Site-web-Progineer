import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { regulationCategories, allRegulations } from '@/data/regulation/regulationData';

const RegulationStats: React.FC = () => {
  const dtuCount = allRegulations.filter(r => r.regulationType === 'dtu').length;
  const fireCount = allRegulations.filter(r => r.regulationType === 'fire-safety').length;
  const accessibilityCount = allRegulations.filter(r => r.regulationType === 'accessibility').length;
  const thermalCount = allRegulations.filter(r => r.regulationType === 'thermal').length;
  const acousticCount = allRegulations.filter(r => r.regulationType === 'acoustic').length;
  const seismicCount = allRegulations.filter(r => r.regulationType === 'seismic').length;
  const hygrothermalCount = allRegulations.filter(r => r.regulationType === 'hygrothermal').length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Total Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-blue-600">{allRegulations.length}</div>
          <p className="text-sm text-gray-600 dark:text-gray-300">Documents réglementaires</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">DTU</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-green-600">{dtuCount}</div>
          <p className="text-sm text-gray-600 dark:text-gray-300">Documents Techniques Unifiés</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Sécurité Incendie</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-red-600">{fireCount}</div>
          <p className="text-sm text-gray-600 dark:text-gray-300">Réglementation ERP/IGH</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Accessibilité</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-purple-600">{accessibilityCount}</div>
          <p className="text-sm text-gray-600 dark:text-gray-300">Normes PMR</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Thermique</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-orange-600">{thermalCount}</div>
          <p className="text-sm text-gray-600 dark:text-gray-300">RE2020 & RT</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Acoustique</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-indigo-600">{acousticCount}</div>
          <p className="text-sm text-gray-600 dark:text-gray-300">Isolation phonique</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Sismique</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-yellow-600">{seismicCount}</div>
          <p className="text-sm text-gray-600 dark:text-gray-300">Parasismique EC8</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Hygrométrie</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-cyan-600">{hygrothermalCount}</div>
          <p className="text-sm text-gray-600 dark:text-gray-300">Gestion humidité</p>
        </CardContent>
      </Card>

      {/* Liste des catégories */}
      <div className="md:col-span-3 lg:col-span-4">
        <Card>
          <CardHeader>
            <CardTitle>Catégories Disponibles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {regulationCategories.map((category) => (
                <Badge key={category.id} variant="outline" className="text-sm">
                  {category.name} ({category.resourceCount})
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Aperçu des derniers DTU ajoutés */}
      <div className="md:col-span-3 lg:col-span-4">
        <Card>
          <CardHeader>
            <CardTitle>Derniers DTU Ajoutés</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {allRegulations
                .filter(r => r.regulationType === 'dtu')
                .slice(-6)
                .map((dtu) => (
                  <div key={dtu.id} className="border rounded-lg p-3">
                    <h4 className="font-medium text-sm text-gray-900 dark:text-white mb-1">
                      {dtu.title}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">
                      {dtu.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {dtu.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegulationStats; 