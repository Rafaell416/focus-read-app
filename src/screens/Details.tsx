import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PrivateStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<PrivateStackParamList, 'Details'>;

export default function Details({ route, navigation }: Props) {
  const { id } = route.params;

  return (
    <View style={styles.container}>
      <Text>Details of book {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});