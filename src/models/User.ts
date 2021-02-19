import { Collection } from './Collection';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';
import { Attributes } from './Attributes';
import { Model } from './Model';

const rootURL = 'http://localhost:3000/users';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(new Attributes(attrs), new Eventing(), new ApiSync(rootURL));
  }

  static buildCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(rootURL, (json: UserProps) => User.buildUser(json));
  }

  onSetAgeClick(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}
