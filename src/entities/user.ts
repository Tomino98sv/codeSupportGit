import { Group } from './group';

export class User {
  constructor(
    public name: string,
    public email: string,
    public id?: number,
    public lastLogin?: Date,
    public password: string = '',
    public active: boolean = true,
    public groups: Array<Group> = []
  ) {}

  public static clone(user: User) {
    return new User(
      user.name,
      user.email,
      user.id,
      user.lastLogin ? new Date(user.lastLogin) : null,
      user.password,
      user.active,
      user.groups
    );
  }

  getSkLastLogin(): string {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeStyle: 'long',
      hour: '2-digit',
      minute: '2-digit'
    };
    return this.lastLogin
      ? this.lastLogin.toLocaleTimeString('sk-SK', options)
      : 'nikdy';
  }
}
