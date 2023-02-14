import User from '#/user';

abstract class UserCreator {
  public abstract factoryMethod(
    peerId: string,
    publicKey: string,
    privateKey: string,
  ): User;

  public someOperation(): string {
    const user = this.factoryMethod(
      '123456789',
      '123456789',
      '123456789',
    );
    return `User: ${user.name}`;
  }
}

class newUser extends UserCreator {
  // eslint-disable-next-line class-methods-use-this
  public factoryMethod(
    peerId: string,
    publicKey: string,
    privateKey: string,
    name = '',
  ): User {
    return new User(
      '',
      '',
      name,
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

export default [newUser];
