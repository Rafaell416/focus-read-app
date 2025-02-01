import { apiClient } from './client';

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

export const booksApi = {
  search: async (query: string): Promise<SearchBooksResponse> => {
    const response = await apiClient.get('/books/search', {
      params: { q: query }
    });
    return response.data;
  },

  getBookById: async (id: string): Promise<Book> => {
    const response = await apiClient.get(`/books/${id}`);
    return response.data;
  },

  getBookTableOfContents: async (id: string): Promise<Book> => {
    const response = await apiClient.get(`/books/${id}/toc`);
    return response.data;
  },

  getCurrentlyReading: async (): Promise<{ books: Book[] }> => {
    const response = await apiClient.get('/books/currently-reading');
    return response.data;
  },

  getCompletedBooks: async (): Promise<{ books: Book[] }> => {
    const response = await apiClient.get('/books/completed-books');
    return response.data;
  }
}; 