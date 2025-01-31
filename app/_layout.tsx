import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="search" options={{
            headerShown: false, 
            presentation: 'fullScreenModal', 
            animation: 'fade',
          }}
        />
      </Stack>
    </SafeAreaView>
  );
}