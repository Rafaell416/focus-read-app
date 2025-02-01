import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PrivateStackParamList } from '@/types/navigation';

import Home from "@/screens/Home";
import Search from "@/screens/Search";
import Details from "@/screens/Details";

const Stack = createNativeStackNavigator<PrivateStackParamList>();

const SearchStack = () => (
  <Stack.Navigator
    initialRouteName="SearchModal"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="SearchModal" component={Search} />
    <Stack.Screen name="Details" component={Details} />
  </Stack.Navigator>
)

export default function PrivateStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Group screenOptions={{ presentation: "fullScreenModal", animation: "fade" }}>
        <Stack.Screen name="SearchStack" component={SearchStack} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
