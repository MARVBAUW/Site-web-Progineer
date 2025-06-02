import logger from '../logger.mjs';

export async function retry(fn, options = {}) {
  const {
    retries = 3,
    minTimeout = 1000,
    maxTimeout = 5000,
    factor = 2,
    randomize = true
  } = options;

  let lastError;
  let attempt = 0;

  while (attempt < retries) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      attempt++;

      if (attempt === retries) {
        await logger.log(`Échec après ${retries} tentatives: ${error.message}`, 'error');
        throw error;
      }

      const timeout = Math.min(
        maxTimeout,
        minTimeout * Math.pow(factor, attempt - 1)
      );

      const delay = randomize
        ? timeout * (0.5 + Math.random())
        : timeout;

      await logger.log(
        `Tentative ${attempt}/${retries} échouée. Nouvelle tentative dans ${Math.round(delay)}ms`,
        'warn'
      );

      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }

  throw lastError;
} 