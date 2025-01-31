import { View, Text, StyleSheet, Pressable } from 'react-native';
import { memo } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { colors, fontFamilies } from '@/theme';
import { horizontalScale, scale, verticalScale } from '@/utils/responsive';

interface SearchBarButtonProps {
  onPress: () => void;
  placeholder?: string;
}

const SearchBarButton = ({ 
  onPress, 
  placeholder = "Search for books or authors" 
}: SearchBarButtonProps) => {
  return (
    <Pressable 
      onPress={onPress} 
      style={({pressed}) => [
        styles.container,
        pressed && styles.pressed
      ]}
    >
      <View style={styles.searchContainer}>
        <FontAwesome 
          name="search" 
          size={scale(18)} 
          color={colors.darkGray.four} 
          style={styles.searchIcon}
        />
        <Text style={styles.placeholder}>{placeholder}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: horizontalScale(30),
    paddingVertical: verticalScale(10),
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.lightGray.three,
    borderRadius: scale(12),
    paddingHorizontal: horizontalScale(16),
    height: verticalScale(50),
  },
  searchIcon: {
    marginRight: horizontalScale(10),
  },
  placeholder: {
    flex: 1,
    fontSize: scale(12),
    color: colors.darkGray.four,
    fontFamily: fontFamilies.montserrat.light,
    fontWeight: '400',
  },
  pressed: {
    opacity: 0.7,
  },
});

export default memo(SearchBarButton); 