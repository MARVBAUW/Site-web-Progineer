import { useState } from 'react';
import { useVeilleReglementaire } from '@/hooks/useVeilleReglementaire';

export const TestVeille = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<any>(null);
  const { generateArticle, getArticles, publishArticle, loading, error } = useVeilleReglementaire();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // const response = await generateArticle(query);
      // setResult(response);
      // console.log('Réponse complète:', response);
    } catch (err) {
      console.error('Erreur:', err);
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Test de la Veille Réglementaire</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="query" className="block text-sm font-medium mb-2">
            Votre question
          </label>
          <textarea
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-2 border rounded-md"
            rows={4}
            placeholder="Entrez votre question sur la réglementation..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
        >
          {loading ? 'Chargement...' : 'Analyser'}
        </button>
      </form>

      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
          Erreur: {error.message}
        </div>
      )}

      {result && (
        <div className="mt-4 p-4 bg-gray-50 rounded-md">
          <h3 className="font-bold mb-2">Résultat :</h3>
          <pre className="whitespace-pre-wrap">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}; 