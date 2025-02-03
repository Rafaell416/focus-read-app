export interface TableOfContentsItem {
  page: number | null;
  title: string;
  type: 'other' | 'intro' | 'chapter';
}

export type TableOfContents = TableOfContentsItem[]; 

export interface ImageLinks {
  smallThumbnail?: string;
  thumbnail?: string;
  small?: string;
  medium?: string;
  large?: string;
  extraLarge?: string;
}

export interface IndustryIdentifier {
  type: string;
  identifier: string;
}

export interface VolumeInfo {
  title: string;
  subtitle?: string;
  authors: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  industryIdentifiers?: IndustryIdentifier[];
  pageCount?: number;
  categories?: string[];
  averageRating?: number;
  ratingsCount?: number;
  imageLinks?: ImageLinks;
  language?: string;
  previewLink?: string;
  infoLink?: string;
}

export interface Book {
  id: string;
  volumeInfo: VolumeInfo;
}

export interface SearchBooksResponse {
  books: Book[];
  totalItems: number;
}

export interface BookListResponse {
  books: Book[];
}