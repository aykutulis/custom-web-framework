import { User } from './models/User';

const user = new User({ name: 'Sigmund', age: 35 });

user.on('click', () => {
  console.log('Click #1');
});

user.on('click', () => {
  console.log('Click #2');
});

user.on('mousedown', () => {
  console.log('Mousedown Event');
});

user.trigger('mousedown');
