export interface GuideDocument {
  id: string;
  title: string;
  description: string;
  type: string; // 'pdf', 'video', 'text', etc.
  url: string;
  categoryId: string;
  lastUpdated: string;
  fileSize?: string;
  duration?: string; // For videos
  isNew?: boolean;
  isFeatured?: boolean;
  content?: string; // For text content (markdown)
  tags?: string[]; // Tags for filtering and display
  readingTime?: string; // Estimated reading time
}

export interface GuideCategory {
  id: string;
  name: string;
}
