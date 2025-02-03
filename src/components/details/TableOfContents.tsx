import { View, Text, StyleSheet } from 'react-native';
import { TableOfContents as TableOfContentsType, TableOfContentsItem } from '@/types/books';
import { colors, fontFamilies } from '@/theme';
import { scale, horizontalScale, verticalScale } from '@/utils/responsive';

const SectionTitle = ({ text }: { text: string }) => {
  return (
    <Text style={styles.sectionTitle}>{text}</Text>
  )
}

const ChapterName = ({ text }: { text: string }) => {
  return (
    <Text style={styles.chapterName}>{text}</Text>
  )
}

const getTocItem = (item: TableOfContentsItem) => {
  switch (item.type) {
    case 'intro':
      return <ChapterName text={item?.title} />
    case 'chapter':
      return <ChapterName text={item?.title} />
    case 'other':
      return <SectionTitle text={item?.title} />
    default:
      return null
  }
}

const TableOfContents = ({ toc }: { toc: TableOfContentsType }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Table of Contents</Text>
      <View style={styles.tocContainer}>
        {toc.map((item, index) => {
          return (
            <View key={`${item.title}-${index}`}>
              {getTocItem(item)}
            </View>
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: horizontalScale(20),
    paddingTop: verticalScale(30),
  },
  title: {
    fontFamily: fontFamilies.montserrat.semiBold,
    fontSize: scale(18),
    color: colors.darkGray.two,
  },
  tocContainer: {
    marginTop: verticalScale(20),
    flex: 1,
  },
  sectionTitle: {
    fontFamily: fontFamilies.montserrat.regular,
    fontSize: scale(14),
    color: colors.darkGray.two,
    marginBottom: verticalScale(12),
  },
  chapterName: {
    fontFamily: fontFamilies.montserrat.regular,
    fontSize: scale(12),
    color: colors.darkGray.five,
    marginBottom: verticalScale(12),
  },
})

export default TableOfContents;