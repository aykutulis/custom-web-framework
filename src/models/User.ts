interface UserProps {
  name?: string;
  age?: number;
}

type CallBack = () => void;

export class User {
  events: { [eventName: string]: CallBack[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: CallBack): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) return;

    handlers.forEach((callback) => {
      callback();
    });
  }
}
