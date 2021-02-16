import { AxiosResponse } from 'axios';
import { Attributes } from './Attributes';
import { Sync } from './Sync';
import { Eventing } from './Eventing';

const rootURL = 'http://localhost:3000/users';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync(rootURL);
  public attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: UserProps): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.get('id');

    if (typeof id !== 'number') throw new Error('Cannot fetch without an id');

    this.sync.fetch(id).then((res: AxiosResponse) => this.set(res.data));
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((): void => this.trigger('save'))
      .catch((): void => this.trigger('error'));
  }
}
