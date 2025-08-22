import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './SearchBar.style';

const SearchBar = ({onSearch}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}s
        placeholder="Şarkı ara..."
        onChangeText={onSearch}
        placeholderTextColor="#aca9a9ff"

      />
    </View>
  );
};

export default SearchBar;
