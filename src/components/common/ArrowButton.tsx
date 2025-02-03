import { View, Text, StyleSheet, Pressable } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome5';
import { colors } from '@/theme';
import { horizontalScale, verticalScale, scale } from '@/utils/responsive';

interface ArrowButtonProps {
  onPress: () => void;
  arrowDirection?: 'left' | 'right' | 'up' | 'down';
}

export default function ArrowButton({ onPress, arrowDirection = 'left' }: ArrowButtonProps) {
  const name = `chevron-${arrowDirection}`;
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Icon name={name} size={20} color={colors.blue.one} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: verticalScale(40),
    width: horizontalScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue.five,
    borderRadius: scale(20),
  }
}); 