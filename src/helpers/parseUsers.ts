import {User} from '../services/HttpClient';

const parseUsers = (users: User[]) => {
  const keys = Object.keys(users[0]);
  const result: any = {};

  keys.forEach(key => {
    result[key] = users.map(item => (item as any)[key]);
  });

  return result;
};

export default parseUsers;
