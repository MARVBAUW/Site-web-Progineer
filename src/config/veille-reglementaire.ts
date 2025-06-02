export const VEILLE_CONFIG = {
  // Configuration WhatsApp (à configurer plus tard)
  whatsapp: {
    provider: 'twilio',
    sandbox: true,
    commands: {
      generate: '/veille generate',
      modify: '/veille modify',
      approve: '/veille approve',
      help: '/veille help'
    }
  },

  // Configuration des articles
  articles: {
    schedule: {
      days: ['monday', 'wednesday', 'friday'],
      time: '08:00',
      timezone: 'Europe/Paris'
    },
    defaultTopics: [
      "Réglementation thermique RE2020 : dernières évolutions",
      "Innovations en matière de construction durable",
      "Aides et financements pour la rénovation énergétique",
      "Urbanisme et aménagement en région PACA",
      "Nouvelles normes de sécurité incendie",
      "Matériaux biosourcés et construction écologique",
      "Économie circulaire dans le bâtiment",
      "Rénovation énergétique : les nouvelles obligations",
      "Sécurité incendie : les évolutions réglementaires",
      "Construction durable : les matériaux innovants"
    ]
  },

  // Configuration de l'IA
  ai: {
    model: 'claude-3-opus-20240229',
    maxTokens: 4000,
    temperature: 0.7
  }
} 