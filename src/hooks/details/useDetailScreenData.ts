import { useState, useEffect } from 'react';
import { Book, booksApi } from '@/services/api/books';

interface DetailScreenData {
  book: Book | null;
  isLoadingBook: boolean;
  bookError: Error | null;
  tableOfContents: Book | null;
  isLoadingToc: boolean;
  tocError: Error | null;
}

export const useDetailScreenData = (bookId: string): DetailScreenData => {
  const [bookState, setBookState] = useState<{
    book: Book | null;
    isLoading: boolean;
    error: Error | null;
  }>({
    book: null,
    isLoading: true,
    error: null
  });

  const [tocState, setTocState] = useState<{
    tableOfContents: Book | null;
    isLoading: boolean;
    error: Error | null;
  }>({
    tableOfContents: null,
    isLoading: true,
    error: null
  });

  useEffect(() => {
    const abortController = new AbortController();

    const fetchBookDetails = async () => {
      try {
        setBookState(prev => ({ ...prev, isLoading: true, error: null }));
        const bookData = await booksApi.getBookById(bookId, abortController.signal);
        setBookState({ book: bookData, isLoading: false, error: null });
      } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') return;
        setBookState(prev => ({
          ...prev,
          isLoading: false,
          error: error instanceof Error ? error : new Error('Failed to fetch book details')
        }));
      }
    };

    const fetchTableOfContents = async () => {
      try {
        setTocState(prev => ({ ...prev, isLoading: true, error: null }));
        const tocData = await booksApi.getBookTableOfContents(bookId, abortController.signal);
        setTocState({ tableOfContents: tocData, isLoading: false, error: null });
      } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') return;
        setTocState(prev => ({
          ...prev,
          isLoading: false,
          error: error instanceof Error ? error : new Error('Failed to fetch table of contents')
        }));
      }
    };

    fetchBookDetails();
    fetchTableOfContents();

    return () => {
      abortController.abort();
    };
  }, [bookId]);

  return {
    book: bookState.book,
    isLoadingBook: bookState.isLoading,
    bookError: bookState.error,
    tableOfContents: tocState.tableOfContents,
    isLoadingToc: tocState.isLoading,
    tocError: tocState.error,
  };
};
