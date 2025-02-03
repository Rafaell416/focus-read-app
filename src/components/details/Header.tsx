import { View, StyleSheet } from 'react-native';
import { colors } from '@/theme';
import { verticalScale, horizontalScale } from '@/utils/responsive';
import ArrowButton from '@/components/common/ArrowButton';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ArrowButton onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: verticalScale(78),
    backgroundColor: colors.white,
    paddingHorizontal: horizontalScale(20),
    justifyContent: 'center',
  },
});

export default Header;