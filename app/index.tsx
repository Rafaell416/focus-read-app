import { View, StyleSheet } from 'react-native';
import { colors } from '@/theme/colors';
import Header from '@/components/home/Header';
import SearchBarButton from '@/components/home/SearchBarButton';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  const handleSearchPress = () => {
    router.push('/search');
  };

  return (
    <View style={styles.container}>
      <Header />
      <SearchBarButton 
        onPress={handleSearchPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
