import {useEffect, useState} from 'react';

import {HttpClient, User} from '../services/HttpClient';

const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>();
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await HttpClient.fetchUsers();

    setUsers(data);
  };

  return {users};
};

export default useFetchUsers;
