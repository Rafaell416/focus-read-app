import { useRef, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, ActivityIndicator } from 'react-native';
import { colors } from '@/theme';
import { verticalScale, horizontalScale, scale } from '@/utils/responsive';
import Icon from '@expo/vector-icons/FontAwesome5';
import { fontFamilies } from '@/theme';
import { useNavigation } from '@react-navigation/native';

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
}

const SearchBar = ({ query, setQuery }: SearchBarProps) => {
  const inputRef = useRef<TextInput>(null);
  const navigation = useNavigation();
  
  const goBack = () => {
    navigation.goBack();
  }

  const focus = () => {
    inputRef.current?.focus();
  }

  const blur = () => {
    inputRef.current?.blur();
  }

  const cancel = () => {
    blur();
    goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Icon name="search" size={18} color={colors.darkGray.three} />
        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder="Search for books or authors"
          autoFocus={true}
          autoCorrect={false}
          autoComplete="off"
          autoCapitalize="words"
          inputMode="search"
          keyboardType="default"
          returnKeyType="search"
          clearTextOnFocus={false}
          clearButtonMode="while-editing"
          onFocus={focus}
          onBlur={blur}
          placeholderTextColor={colors.lightGray.one}
          value={query}
          onChangeText={setQuery}
        />
      </View>
      <View style={styles.clearButton}>
        <Pressable onPress={cancel}>
          <Text style={styles.clearButtonText}>
            Cancel
          </Text>
        </Pressable>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    width: '100%',
    height: verticalScale(38),
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.white,
    borderRadius: scale(12),
    paddingHorizontal: horizontalScale(16),
    height: verticalScale(38),
    flex: 1,
  },
  input: {
    flex: 1,
    fontSize: scale(11),
    color: colors.darkGray.three,
    fontFamily: fontFamilies.montserrat.regular,
    fontWeight: '400',
    height: '100%',
    width: '100%',
    marginLeft: horizontalScale(6),
  },
  clearButton: {
    justifyContent: 'center',
    height: '100%',
    backgroundColor: 'transparent',
    marginLeft: horizontalScale(18),
  },
  clearButtonText: {
    fontSize: scale(11),
    color: colors.darkGray.four,
    fontFamily: fontFamilies.montserrat.regular,
    fontWeight: '400',
  },

});

export default SearchBar;