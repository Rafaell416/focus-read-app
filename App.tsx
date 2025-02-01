import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
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
import AppRoutes from './src/routes';

SplashScreen.preventAutoHideAsync();

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

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AppRoutes />
  );
}
