import { User } from './models/User';

const user = new User({ name: 'Sigmund', age: 35 });

user.on('click', () => {
  console.log('asd');
});

user.on('click', () => {
  console.log('asd');
});

user.on('mousedown', () => {
  console.log('asd');
});

console.log(user);
