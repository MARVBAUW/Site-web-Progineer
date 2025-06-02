export interface LinkCheckResult {
  url: string;
  status: number;
  source: {
    file: string;
    line: number;
    component?: string;
  };
  isInternal: boolean;
  is404: boolean;
  lastChecked: Date;
}

export interface LinkCheckReport {
  timestamp: Date;
  totalLinks: number;
  brokenLinks: number;
  results: LinkCheckResult[];
  summary: {
    internalLinks: number;
    externalLinks: number;
    brokenInternalLinks: number;
    brokenExternalLinks: number;
  };
}

export interface LinkCheckerConfig {
  baseUrl: string;
  excludePatterns: string[];
  alertThreshold: number;
  checkInterval: number; // en millisecondes
  ignorePatterns: string[];
  timeout?: number;
  maxConcurrentChecks?: number;
  retryAttempts?: number;
  retryDelay?: number;
} 