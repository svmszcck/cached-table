import React from 'react';
import {ScrollView} from 'react-native';

import Table from '../components/Table';
import useFetchUsers from '../hooks/useFetchUsers';

const HomeScreen = () => {
  const {users} = useFetchUsers();

  console.log(users);

  return (
    <ScrollView style={{padding: 20}}>
      <Table />
    </ScrollView>
  );
};

export default HomeScreen;
