import { memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, fontFamilies } from '@/theme';
import { horizontalScale, verticalScale, scale } from '@/utils/responsive';
import Icon from '@expo/vector-icons/FontAwesome5'

interface FocusButtonProps {
  onPress: () => void;
}

const FocusButton = ({ onPress }: FocusButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <View style={styles.container}>
        <Icon name="play" size={scale(15)} color={colors.white} />
        <Text style={styles.text}>Focus</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue.one,
    height: verticalScale(40),
    borderRadius: scale(8),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(14),
    paddingVertical: verticalScale(12),
    flexDirection: 'row',
    maxWidth: horizontalScale(120),
  },
  text: {
    color: colors.white,
    fontSize: scale(14),
    fontWeight: '600',
    fontFamily: fontFamilies.montserrat.semiBold,
    marginLeft: horizontalScale(12),
  },
});

export default memo(FocusButton);