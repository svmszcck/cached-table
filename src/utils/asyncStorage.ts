import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (
  key: string,
  value: string | object | number,
): Promise<void> => {
  const parsedData =
    typeof value === 'object' || typeof value === 'number'
      ? JSON.stringify(value)
      : value;

  try {
    await AsyncStorage.setItem(key, parsedData);
  } catch (error) {
    console.log('Async Storage error: ', error);
  }
};

export const getItem = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key);

    if (data) {
      return JSON.parse(data);
    }
  } catch (error) {
    console.log('Async Storage error: ', error);
  }
};
