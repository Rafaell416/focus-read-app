import { useCallback } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { colors } from '@/theme';
import SearchBar from '@/components/search/SearchBar';
import { horizontalScale, verticalScale } from '@/utils/responsive';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SearchResultCard from '@/components/search/SearchResultCard';
import { useSearchBooks } from '@/hooks/search/useSearchBooks';
import { Book } from '@/services/api/books';
import { fontFamilies } from '@/theme';
import { scale } from '@/utils/responsive';

const Search = () => {
  const insets = useSafeAreaInsets();
  const { books, isLoading, error, query, setQuery } = useSearchBooks();

  const renderItem = useCallback(({ item }: { item: Book }) => (
    <SearchResultCard book={item} />
  ), []);

  return (
    <View style={styles.container}>
      <View style={[styles.searchBarContainer, { paddingTop: insets.top }]}>
        <SearchBar query={query} setQuery={setQuery} />
      </View>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              {isLoading ? 'Searching...' : error ? 'No results found' : null}
            </Text>
          </View>
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  searchBarContainer: {
    paddingHorizontal: horizontalScale(20),
    width: '100%',
    backgroundColor: colors.lightGray.three,
    paddingBottom: verticalScale(20),
  },
  listContainer: {
    paddingBottom: verticalScale(40),
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: verticalScale(40),
  },
  emptyText: {
    color: colors.darkGray.three,
    fontSize: scale(14),
    fontFamily: fontFamilies.montserrat.regular,
  },
});

export default Search;
