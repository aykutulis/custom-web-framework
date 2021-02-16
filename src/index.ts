import { User } from './models/User';

const user = new User({ name: 'Arthur', age: 65 });

user.on('save', () => {
  console.log(user);
});

user.save();
