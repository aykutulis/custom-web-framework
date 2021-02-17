import { User } from './models/User';

const collection = User.buildCollection();

collection.on('change', () => {
  console.log(collection);
});

collection.fetch();
