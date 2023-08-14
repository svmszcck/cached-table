/* eslint-disable curly */
import {useEffect, useState} from 'react';

import {HttpClient, User} from '../services/HttpClient';
import {setItem, getItem} from '../utils/asyncStorage';
import checkHourDifference from '../helpers/checkHourDifference';

const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async (): Promise<void> => {
    const time = await getItem('time');

    const fetchData = async () => {
      const data = await HttpClient.fetchUsers();
      setUsers(data);
      setLoading(false);
      setItem('time', Date.now());
    };

    // less than 1 hour passed
    if (time && checkHourDifference(time, Date.now()) < 1) {
      const data = await getItem('data');

      if (!data) fetchData();
      else {
        setUsers(data);
        setLoading(false);
      }
    } else {
      fetchData();
    }
  };

  return {loading, users, setUsers};
};

export default useFetchUsers;
