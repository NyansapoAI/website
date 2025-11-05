export interface Report {
  id: number;
  title: string;
  description: string;
  category: string;
  year: string;
  downloadUrl: string;
  imageUrl: string;
  pages: number;
  fileSize: string;
  tags?: string[];
  index?: number;
}

export interface SearchFilters {
  query: string;
  category: string;
  year: string;
  tags: string[];
}