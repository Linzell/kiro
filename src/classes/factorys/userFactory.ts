import User from '#/user';
import OnlineStateEnum from '#/enums/onlineStateEnum';

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
class NewUser extends UserCreator {
  // eslint-disable-next-line class-methods-use-this
  public factoryMethod(
    peerId: string,
    publicKey: string,
    name = 'New user',
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
      OnlineStateEnum.OFFLINE,
    );
  }
}

class createUserFromJson {
  // eslint-disable-next-line class-methods-use-this
  public factoryMethod(
    jsonPayload: any,
  ): User {
    return new User(
      jsonPayload.id,
      jsonPayload.cid,
      jsonPayload.name,
      jsonPayload.ownerId,
      jsonPayload.description,
      jsonPayload.content,
      jsonPayload.imgUrl,
      jsonPayload.createdDate,
      jsonPayload.modifiedDate,
      jsonPayload.tags,
      jsonPayload.followerIds,
      jsonPayload.expertsIds,
      jsonPayload.email,
      jsonPayload.peerId,
      jsonPayload.publicKey,
      jsonPayload.onlineStatus,
    );
  }
}

export default { NewUser, createUserFromJson };
