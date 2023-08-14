import React from 'react';
import {ActivityIndicator, View, Text, StyleSheet} from 'react-native';

import Table from '../components/Table';
import useFetchUsers from '../hooks/useFetchUsers';
import Colors from '../constants/colors';

const HomeScreen = () => {
  const {loading, users} = useFetchUsers();

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      {users ? (
        <Table data={users} limit={{index: 1, value: 60}} />
      ) : (
        <Text>There is no data</Text>
      )}
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 20,
  },
});

export default HomeScreen;
