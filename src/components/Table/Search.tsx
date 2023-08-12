import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';

import Colors from '../../constants/colors';

type SearchProps = {
  onSearch: (text: string) => void;
};

const Search = ({onSearch}: SearchProps) => {
  const [value, setValue] = useState<string>('');

  return (
    <TextInput
      style={styles.container}
      value={value}
      placeholder="search..."
      onChangeText={setValue}
      onSubmitEditing={() => onSearch(value)}
    />
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
