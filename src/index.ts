import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const user = User.buildUser({ name: 'NAME', age: 25 });

const userEdit = new UserEdit(document.getElementById('root')!, user);

console.log(userEdit);

userEdit.render();
