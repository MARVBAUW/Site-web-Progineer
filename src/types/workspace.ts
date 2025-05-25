// Types et interfaces pour le workspace Progineer v2

export interface WorkspaceResource {
  id: string;
  type: 'guide' | 'calculator' | 'regulation';
  title: string;
  description: string;
  category: string;
  tags: string[];
  lastUpdated: string;
  author?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime?: string;
  isPublic: boolean;
  isPremium?: boolean;
  seoData?: SEOData;
}

export interface SEOData {
  title: string;
  metaDescription: string;
  keywords: string[];
  canonicalUrl?: string;
  structuredData?: Record<string, any>;
}

export interface Guide extends WorkspaceResource {
  type: 'guide';
  readTime: string;
  content: string;
  sections: GuideSection[];
  relatedGuides?: string[];
  downloadUrl?: string;
  fileSize?: string;
}

export interface GuideSection {
  id: string;
  title: string;
  content: string;
  subsections?: GuideSubsection[];
}

export interface GuideSubsection {
  id: string;
  title: string;
  content: string;
}

export interface Calculator extends WorkspaceResource {
  type: 'calculator';
  calculatorType: CalculatorType;
  inputs: CalculatorInput[];
  outputs: CalculatorOutput[];
  formula?: string;
  validationRules?: ValidationRule[];
  examples?: CalculatorExample[];
  relatedCalculators?: string[];
}

export type CalculatorType = 
  | 'thermal' 
  | 'structural' 
  | 'eurocodes' 
  | 'acoustic' 
  | 'fire' 
  | 'accessibility' 
  | 'fluids' 
  | 'geotechnical' 
  | 'financial' 
  | 'surface';

export interface CalculatorInput {
  id: string;
  label: string;
  type: 'number' | 'select' | 'text' | 'boolean';
  unit?: string;
  required: boolean;
  min?: number;
  max?: number;
  options?: { value: string; label: string }[];
  placeholder?: string;
  helpText?: string;
}

export interface CalculatorOutput {
  id: string;
  label: string;
  unit?: string;
  format?: 'number' | 'percentage' | 'currency' | 'text';
  precision?: number;
}

export interface ValidationRule {
  field: string;
  rule: 'min' | 'max' | 'required' | 'custom';
  value?: number | string;
  message: string;
  customValidator?: (value: any) => boolean;
}

export interface CalculatorExample {
  title: string;
  description: string;
  inputs: Record<string, any>;
  expectedOutputs: Record<string, any>;
}

export interface RegulationDocument extends WorkspaceResource {
  type: 'regulation';
  regulationType: RegulationType;
  reference: string;
  scope: string;
  applicableFrom?: string;
  supersedes?: string[];
  keyRules: RegulationRule[];
  tolerances?: RegulationTolerance[];
  dimensions?: RegulationDimension[];
  relatedDocuments?: string[];
}

export type RegulationType = 
  | 'dtu' 
  | 'eurocode' 
  | 'fire-safety' 
  | 'accessibility' 
  | 'thermal' 
  | 'acoustic'
  | 'seismic' 
  | 'hygrothermal'
  | 'environmental';

export interface RegulationRule {
  id: string;
  title: string;
  description: string;
  mandatory: boolean;
  exceptions?: string[];
  references?: string[];
}

export interface RegulationTolerance {
  parameter: string;
  tolerance: string;
  conditions?: string;
}

export interface RegulationDimension {
  element: string;
  dimension: string;
  minimum?: string;
  maximum?: string;
  conditions?: string;
}

export interface WorkspaceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  resourceCount: number;
  subcategories?: WorkspaceSubcategory[];
}

export interface WorkspaceSubcategory {
  id: string;
  name: string;
  description: string;
  parentId: string;
}

export interface SearchFilters {
  category?: string;
  subcategory?: string;
  difficulty?: string;
  type?: string;
  isPremium?: boolean;
  tags?: string[];
}

export interface WorkspaceStats {
  totalResources: number;
  guidesCount: number;
  calculatorsCount: number;
  regulationsCount: number;
  lastUpdate: string;
  popularResources: string[];
  recentlyAdded: string[];
}

export interface UserProgress {
  userId: string;
  completedGuides: string[];
  favoriteResources: string[];
  recentlyViewed: string[];
  calculationHistory: CalculationResult[];
}

export interface CalculationResult {
  calculatorId: string;
  timestamp: string;
  inputs: Record<string, any>;
  outputs: Record<string, any>;
  name?: string;
}

export interface WorkspaceConfig {
  enablePublicAccess: boolean;
  enablePremiumFeatures: boolean;
  enableUserAccounts: boolean;
  defaultLanguage: string;
  supportedLanguages: string[];
  analyticsEnabled: boolean;
  seoEnabled: boolean;
} 