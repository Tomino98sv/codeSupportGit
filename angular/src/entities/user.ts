export class User {
  constructor(
    public name: string,
    public id?: number,
    public password: string = '',
  ) {}

  public static clone(user: User) {
    return new User(
      user.name,
      user.id,
      user.password,
    );
  }
}
