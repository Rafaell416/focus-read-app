import { View, Text, StyleSheet } from 'react-native';
import { colors, fontFamilies } from '@/theme';
import { scale, horizontalScale, verticalScale } from '@/utils/responsive';

const TitleSection = ({ title, author }: { title: string, author: string }) => {
  return (
    <View style={styles.titleContainer}>
    <Text style={styles.title}>
      {title}
    </Text>
    <Text style={styles.author}>
      {author}
    </Text>
  </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: 'transparent',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(20),
  },
  title: {
    fontSize: scale(20),
    fontWeight: '600',
    fontFamily: fontFamilies.montserrat.semiBold,
    color: colors.darkGray.two,
  },
  author: {
    fontSize: scale(12),
    fontWeight: '500',
    fontFamily: fontFamilies.montserrat.medium,
    color: colors.lightGray.one,
    marginTop: verticalScale(4),
  },
});

export default TitleSection;