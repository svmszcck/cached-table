import React from 'react';
import {FlatList, View, Text, Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;

const Table = () => {
  return (
    <View style={[styles.container, {minWidth: width - 40}]}>
      <FlatList
        data={[1, 2, 3]}
        showsHorizontalScrollIndicator={false}
        numColumns={3}
        renderItem={({item}) => (
          <View style={{flex: 1}}>
            <View style={styles.cell}>
              <Text>Column 1</Text>
            </View>
            <View style={styles.cell}>
              <Text>Bsdsdfsdfjhjhgjdfgdfgkdjfhgdfghggjhdfhdfgjdhfgjhfs</Text>
            </View>
            <View style={styles.cell}>
              <Text>C</Text>
            </View>
            <View style={styles.cell}>
              <Text>D</Text>
            </View>
            <View style={styles.cell}>
              <Text>E</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 300,
    backgroundColor: '#fff',
    flex: 1,
  },
  cell: {
    borderWidth: 1,
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderColor: '#ddd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
});

export default Table;
