import AppLoading from 'expo-app-loading';
import { View } from 'react-native';
import { 
  useFonts, 
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light, 
  Montserrat_400Regular, 
  Montserrat_500Medium, 
  Montserrat_600SemiBold,
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat';


export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View />
  );
}
