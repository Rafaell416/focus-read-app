import { StyleSheet, ScrollView, ActivityIndicator, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PrivateStackParamList } from '../types/navigation';
import { useDetailScreenData } from '@/hooks/details/useDetailScreenData';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/details/Header';
import { colors } from '@/theme';
import ThumbnailSection from '@/components/details/ThumbnailSection';
import TitleSection from '@/components/details/TitleSection';
import FocusControlsSection from '@/components/details/FocusControlsSection';
import TableOfContents from '@/components/details/TableOfContents';

//import { book, table_of_contents } from '@/mock';

type Props = NativeStackScreenProps<PrivateStackParamList, 'Details'>;

export default function Details({ route }: Props) {
  const { id } = route.params;
  const {
    book,
    isLoadingBook,
    bookError,
    tableOfContents,
    isLoadingToc,
    tocError
  } = useDetailScreenData(id);


  if (isLoadingBook || isLoadingToc) {
    return <ActivityIndicator />
  }

  if (bookError || tocError) {
    return <Text>Error</Text>
  }

  console.log({book, tableOfContents})


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <ThumbnailSection thumbnail={book?.volumeInfo?.imageLinks?.thumbnail} />
        <TitleSection title={book?.volumeInfo?.title} author={book?.volumeInfo?.authors?.[0]} />
        <FocusControlsSection onEllipsisPress={() => {}} onFocusPress={() => {}} />
        <TableOfContents toc={tableOfContents.toc} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});


