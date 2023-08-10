import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

import Colors from '../../constants/colors';

const Search = () => {
  return (
    <TextInput style={styles.container} value="" placeholder="search..." />
  );
};

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.gray,
    color: Colors.black,
    padding: 5,
    width: 150,
  },
});

export default Search;
