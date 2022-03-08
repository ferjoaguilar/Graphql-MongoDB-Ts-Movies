export const resolvers = {
  Query: {
    getUsers: () => [
      {
        name: 'Vic Ferman',
        lastName: 'Flores Escobar',
        email: 'vicflores2211@gmail.com',
        password: 'abc12345',
      },
      {
        name: 'Fernando Jose',
        lastName: 'Aguilar Rivas',
        email: 'ferrivas127@gmail.com',
        password: 'abc12345',
      },
    ],

    getMovies: () => [
      { name: 'Deadpool', category: 'Action/Comedy', age: 2018 },
      { name: 'Green Linter', category: 'Action/Comedy', age: 2015 },
    ],
  },
};
