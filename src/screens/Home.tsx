import { View, StyleSheet } from 'react-native';
import { colors } from '@/theme/colors';
import Header from '@/components/home/Header';
import SearchBarButton from '@/components/home/SearchBarButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PrivateStackParamList } from '@/types/navigation';

type Props = NativeStackScreenProps<PrivateStackParamList, 'Home'>;

export default function Home({ navigation }: Props) {

  const handleSearchPress = () => {
    navigation.navigate('SearchStack');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchBarButton 
        onPress={handleSearchPress}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
