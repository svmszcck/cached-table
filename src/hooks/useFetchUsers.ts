/* eslint-disable curly */
import {useEffect, useState} from 'react';

import {HttpClient, User} from '../services/HttpClient';
import {setItem, getItem} from '../utils/asyncStorage';
import checkHourDifference from '../helpers/checkHourDifference';

const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const time = await getItem('time');

    const fetchData = async () => {
      const data = await HttpClient.fetchUsers();
      setUsers(data);
      setItem('time', Date.now());
    };

    if (time && checkHourDifference(time, Date.now()) <= 1) {
      const data = await getItem('data');

      if (!data) fetchData();
      else setUsers(data);
    } else {
      fetchData();
    }
  };

  return {users, setUsers};
};

export default useFetchUsers;
