import React from 'react';
import {View} from 'react-native';

import Table from '../components/Table';
import useFetchUsers from '../hooks/useFetchUsers';

const HomeScreen = () => {
  const {users} = useFetchUsers();

  return (
    <View style={{padding: 20}}>
      <Table data={users} />
    </View>
  );
};

export default HomeScreen;
