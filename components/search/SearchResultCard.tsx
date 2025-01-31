import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Book } from '@/services/api/books';
import { colors } from '@/theme';
import { scale, verticalScale, horizontalScale } from '@/utils/responsive';
import { Image } from 'expo-image';
import { blurhash } from '@/utils/constants';
import { fontFamilies } from '@/theme';

interface SearchResultCardProps {
  book: Book;
  onPress?: () => void;
}

const SearchResultCard = ({ book, onPress }: SearchResultCardProps) => {
  const { volumeInfo } = book;
  const thumbnailUrl = volumeInfo.imageLinks?.thumbnail || volumeInfo.imageLinks?.smallThumbnail;
  const authors = volumeInfo.authors?.join(', ') || 'Unknown Author';

  const title = volumeInfo.title;
  const author = authors;
  const image = thumbnailUrl;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          contentFit="contain"
          transition={1000}
          placeholder={blurhash}
          source={{ uri: image }}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>By: {author}</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: horizontalScale(18),
    paddingTop: verticalScale(18),
    flexDirection: 'row',
  },
  imageContainer: {
    width: horizontalScale(40),
    height: verticalScale(60),
    borderRadius: scale(5),
    backgroundColor: colors.white,
    marginRight: horizontalScale(16),
    shadowColor: colors.lightGray.one,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  info: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  title: {
    fontSize: scale(12),
    fontFamily: fontFamilies.montserrat.medium,
    fontWeight: '500',
    color: colors.darkGray.two,
    marginBottom: verticalScale(5),
  },
  author: {
    fontSize: scale(10),
    fontFamily: fontFamilies.montserrat.light,
    color: colors.darkGray.three,
    fontWeight: '300',
  },
});

export default SearchResultCard;