import { View } from './View';
import { User, UserProps } from '../models/User';

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
      <div>
        <h1>User Details</h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
      </div>
    `;
  }
}
