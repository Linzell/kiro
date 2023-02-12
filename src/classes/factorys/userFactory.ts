import User from '#/user';

abstract class UserCreator {
  public abstract factoryMethod(): User;

  public someOperation(): string {
    const user = this.factoryMethod();
    return `User: ${user.name}`;
  }
}

class newUser extends User {
  // eslint-disable-next-line class-methods-use-this
  public factoryMethod(
    peerId: string,
    publicKey: string,
    privateKey: string,
  ): User {
    return new User(
      '',
      '',
      '',
      peerId,
      'A new user',
      '',
      '',
      new Date(),
      new Date(),
      [],
      [],
      [],
      '',
      peerId,
      publicKey,
      privateKey,
    );
  }
}

export default [UserCreator, newUser];
