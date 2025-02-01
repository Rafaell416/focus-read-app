import { useState, useEffect } from 'react';
import { booksApi, Book } from '@/services/api/books';
import { useDebouncedCallback } from 'use-debounce';

export const useSearchBooks = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [books, setBooks] = useState<Book[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [query, setQuery] = useState('');

  // Debounced search function
  const debouncedSearch = useDebouncedCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setBooks([]);
      setTotalItems(0);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      const response = await booksApi.search(searchQuery);
      setBooks(response.books);
      setTotalItems(response.totalItems);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while searching');
      setBooks([]);
      setTotalItems(0);
    } finally {
      setIsLoading(false);
    }
  }, 300); // 300ms delay

  // Trigger search when query changes
  useEffect(() => {
    debouncedSearch(query);
  }, [query, debouncedSearch]);

  return {
    books,
    totalItems,
    isLoading,
    error,
    query,
    setQuery,
  };
};
