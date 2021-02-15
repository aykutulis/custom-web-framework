import { User } from './models/User';

const user = new User({ id: 1 });

user.set({ age: 25 });

user.save();
