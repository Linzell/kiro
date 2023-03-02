import User from '#/user';

abstract class UserCreator {
  public abstract factoryMethod(
    peerId: string,
    publicKey: string,
  ): User;

  public someOperation(
    peerId: string,
    publicKey: string,
  ): string {
    const user = this.factoryMethod(
      peerId,
      publicKey,
    );
    return `User: ${user.name}`;
  }
}

/**
 * Generates a new instance of a User
 * @factoryMethod returns a new instance of a User
 * @param peerId [Required] - peer id of the user
 * @param publicKey [Required] - public key of the user
 * @param name - name of the user
 * @param description - description of the user
 * @param content - content of the user
 * @param imgUrl - image url of the user
 * @param tags - tags of the user
 * @param followerIds - follower ids of the user
 * @param expertsIds - expert ids of the user
 * @param email - email of the user
 */
class newUser extends UserCreator {
  // eslint-disable-next-line class-methods-use-this
  public factoryMethod(
    peerId: string,
    publicKey: string,
    name = '',
    description = 'A new User',
    content = '',
    imgUrl = '',
    tags = [],
    followerIds = [],
    expertsIds = [],
    email = '',
  ): User {
    return new User(
      '',
      '',
      name,
      peerId,
      description,
      content,
      imgUrl,
      new Date(),
      new Date(),
      tags,
      followerIds,
      expertsIds,
      email,
      peerId,
      publicKey,
    );
  }
}

export default [newUser];
