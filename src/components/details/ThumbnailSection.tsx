import { View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { blurhash } from '@/utils/constants';
import { colors } from '@/theme';
import { scale, horizontalScale, verticalScale } from '@/utils/responsive';

const ThumbnailSection = ({ thumbnail }: { thumbnail: string }) => {
  return (
    <View style={styles.imageContainer}>
    <View style={styles.imageWrapper}>
      <Image
        style={styles.image}
        contentFit="contain"
        transition={1000}
        placeholder={blurhash}
        source={{ uri: thumbnail }}
      />
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: 'transparent',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(210),
  },
  imageWrapper: {
    borderRadius: scale(10),
    height: verticalScale(210),
    width: horizontalScale(140),
    overflow: 'hidden',
    shadowColor: colors.lightGray.one,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});

export default ThumbnailSection;