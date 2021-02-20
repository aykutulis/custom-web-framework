import { UserList } from './views/UserList';
import { User, UserProps } from './models/User';
import { Collection } from './models/Collection';

const users = new Collection('http://localhost:3000/users', (json: UserProps) => {
  return User.buildUser(json);
});

users.on('change', () => {
  const root = document.getElementById('root')!;

  new UserList(root, users).render();
});

users.fetch();
