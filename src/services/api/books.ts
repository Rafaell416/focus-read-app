import { apiClient } from './client';
import { Book, SearchBooksResponse, TableOfContents } from '@/types/books';

export const booksApi = {
  search: async (query: string): Promise<SearchBooksResponse> => {
    const response = await apiClient.get('/books/search', {
      params: { q: query }
    });
    return response.data;
  },

  getBookById: async (id: string, signal?: AbortSignal): Promise<Book> => {
    const response = await apiClient.get(`/books/${id}`, { signal });
    return response.data;
  },

  getBookTableOfContents: async (id: string, signal?: AbortSignal): Promise<TableOfContents> => {
    const response = await apiClient.get(`/books/${id}/toc`, { signal });
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