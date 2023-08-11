export type User = {readonly name: string; readonly age: number};

export class HttpClient {
  private static readonly users: User[] = [
    {
      name: 'Matthew',
      age: 15,
    },
    {
      name: 'Alexander',
      age: 32,
    },
    {
      name: 'Samuel',
      age: 22,
    },
    {
      name: 'Onur',
      age: 76,
    },
    {
      name: 'Ajhejrh',
      age: 34,
    },
    {
      name: 'Lklkert',
      age: 54,
    },
    {
      name: 'Tom',
      age: 43,
    },
    {
      name: 'Selin',
      age: 29,
    },
    {
      name: 'Ayse',
      age: 64,
    },
    {
      name: 'Merve',
      age: 25,
    },
    {
      name: 'Salih',
      age: 77,
    },
  ];
  public static async fetchUsers(): Promise<User[]> {
    return Promise.resolve(HttpClient.users);
  }
}
