import React from 'react';
import {View, StyleSheet} from 'react-native';

import Table from '../components/Table';
import useFetchUsers from '../hooks/useFetchUsers';

const HomeScreen = () => {
  const {users} = useFetchUsers();

  return (
    <View style={styles.container}>
      <Table data={users} limit={{index: 1, value: 60}} />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default HomeScreen;
