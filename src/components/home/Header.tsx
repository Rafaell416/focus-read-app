import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { memo } from 'react';
import { colors } from '@/theme/colors';
import { horizontalScale, verticalScale, scale } from '@/utils/responsive';
import { FontAwesome5 } from '@expo/vector-icons';

interface AvatarProps {
  imageUrl?: string;
  onPress?: () => void;
  size?: number;
}

const Avatar = ({ imageUrl, onPress, size = 40 }: AvatarProps) => {
  return (
    <Pressable 
      onPress={onPress}
      style={({pressed}) => [
        styles.avatarContainer,
        { width: size, height: size },
        pressed && styles.pressed
      ]}
    >
      {imageUrl ? (
        <Image 
          source={{ uri: imageUrl }}
          style={styles.avatarImage} 
        />
      ) : (
        <FontAwesome5 name="user-alt" size={scale(16)} color={colors.blue.one} />
      )}
    </Pressable>
  );
}

const Header = () => {
  return (
    <View style={styles.container}>
      <Avatar onPress={() => console.log('Avatar pressed')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: '100%',
    height: verticalScale(60),
    paddingHorizontal: horizontalScale(30),
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  avatarContainer: {
    borderRadius: scale(20),
    overflow: 'hidden',
    backgroundColor: colors.blue.five,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  pressed: {
    opacity: 0.7,
  },
});

export default memo(Header);
