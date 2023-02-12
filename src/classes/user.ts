import Item from '#/item';
import UserState from '$/userState';

/**
 * User class
 * @extends Item
 * @method constructor
 * ```TS
 * constructor(
 * id: string,
 * cid: string,
 * name: string,
 * ownerId: string,
 * description: string,
 * content: string,
 * imgUrl: string,
 * createdDate : Date,
 * modifiedDate : Date,
 * tags: string[],
 * followerIds: string[],
 * expertsIds: string[],
 * email: string,
 * peerId: string,
 * privateKey: string,
 * publicKey: string
 * )
 * ```
 */
class User extends Item {
  private Email: string;

  private PeerId: string;

  private PrivateKey: string;

  private PublicKey: string;

  constructor(
    id: string,
    cid: string,
    name: string,
    ownerId: string,
    description: string,
    content: string,
    imgUrl: string,
    createdDate : Date,
    modifiedDate : Date,
    tags: string[],
    followerIds: string[],
    expertsIds: string[],
    email: string,
    peerId: string,
    privateKey: string,
    publicKey: string,
  ) {
    super(
      id,
      cid,
      name,
      ownerId,
      description,
      content,
      imgUrl,
      createdDate,
      modifiedDate,
      tags,
      followerIds,
      expertsIds,
    );
    this.Email = email;
    this.PeerId = peerId;
    this.PrivateKey = privateKey;
    this.PublicKey = publicKey;
  }

  get email(): string {
    return this.Email;
  }

  set email(value: string) {
    this.Email = value;
  }

  get peerId(): string {
    return this.PeerId;
  }

  set peerId(value: string) {
    this.PeerId = value;
  }

  get privateKey(): string {
    return this.PrivateKey;
  }

  set privateKey(value: string) {
    this.PrivateKey = value;
  }

  get publicKey(): string {
    return this.PublicKey;
  }

  set publicKey(value: string) {
    this.PublicKey = value;
  }

  // eslint-disable-next-line class-methods-use-this
  public addItem(user: User): void {
    UserState.addUser(user);
  }

  // eslint-disable-next-line class-methods-use-this
  public deleteItemById(id: string): void {
    UserState.removeUserById(id);
  }

  // eslint-disable-next-line class-methods-use-this
  public updateItem(user: User): void {
    UserState.updateUser(user);
  }
}

export default User;
