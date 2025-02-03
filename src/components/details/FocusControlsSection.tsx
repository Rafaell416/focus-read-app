import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '@/theme';
import { scale, horizontalScale } from '@/utils/responsive';
import Icon from '@expo/vector-icons/FontAwesome5'
import FocusButton from './FocusButton';

interface FocusControlsSectionProps {
  onEllipsisPress: () => void;
  onFocusPress: () => void;
}

const FocusControlsSection = ({ onEllipsisPress, onFocusPress }: FocusControlsSectionProps) => {
  return (
    <View style={styles.focusContainer}>
      <View style={styles.icons}>
        <Icon name="check-circle" size={scale(20)} color={colors.lightGray.one} />
        <TouchableOpacity activeOpacity={0.8} onPress={onEllipsisPress} hitSlop={10}>
          <View style={styles.ellipsisContainer}>
            <Icon name="ellipsis-v" size={scale(20)} color={colors.lightGray.one} />
          </View>
        </TouchableOpacity>
      </View>
      <FocusButton onPress={onFocusPress} />
    </View>
  )
}

const styles = StyleSheet.create({
  focusContainer: {
    backgroundColor: 'transparent',
    width: '100%',
    paddingHorizontal: horizontalScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ellipsisContainer: {
    marginLeft: horizontalScale(20),
  }
});

export default FocusControlsSection;