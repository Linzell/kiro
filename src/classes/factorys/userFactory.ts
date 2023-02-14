import User from '#/user';

abstract class UserCreator {
  public abstract factoryMethod(
    peerId: string,
    publicKey: string,
    privateKey: string,
  ): User;

  public someOperation(
    peerId: string,
    publicKey: string,
    privateKey: string,
  ): string {
    const user = this.factoryMethod(
      peerId,
      publicKey,
      privateKey,
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
