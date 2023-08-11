import 'react-native';
import {renderHook} from '@testing-library/react-hooks';
import {it} from '@jest/globals';
import AsyncStorage from '@react-native-async-storage/async-storage';

import useFetchUsers from '../src/hooks/useFetchUsers';
import {HttpClient} from '../src/services/HttpClient';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

// jest.useFakeTimers();

it('fetches data from api', async () => {
  const data = await HttpClient.fetchUsers();

  const {result, waitForNextUpdate} = renderHook(useFetchUsers);

  await waitForNextUpdate();

  expect(AsyncStorage.getItem).toBeCalledWith('time');
  expect(result.current.users).toEqual(data);
});

it('fetches data from async storage', async () => {
  const data = await HttpClient.fetchUsers();
  await AsyncStorage.setItem('time', JSON.stringify(Date.now() - 3000000));

  const {result, waitForNextUpdate} = renderHook(useFetchUsers);

  await waitForNextUpdate();

  expect(AsyncStorage.getItem).toBeCalledWith('time');
  // Data was fetched from async storage instead of api
  expect(AsyncStorage.getItem).toBeCalledWith('data');
  expect(result.current.users).toEqual(data);
});
