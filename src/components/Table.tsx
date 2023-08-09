import React from 'react';
import {ScrollView, View, Text, Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;

const Table = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      horizontal
      showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', flex: 1, minWidth: width - 40}}>
          <View style={{flex: 1}}>
            <View style={styles.cell}>
              <Text>Column 1</Text>
            </View>
            <View style={styles.cell}>
              <Text>Bsdfsdfjkherkjthkjhk jhk sdfsdf sdfhj hj</Text>
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
          <View style={{flex: 1}}>
            <View style={styles.cell}>
              <Text>Column 2</Text>
            </View>
            <View style={styles.cell}>
              <Text>Bsdfsdfjkherkjthkjhk jhk sdfsdf sdfhj hj</Text>
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
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
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
