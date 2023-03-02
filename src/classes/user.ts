import { useAppSelector } from '$/hooks';
import {
  removeUser,
  updateUser,
  addCurrentUser,
  removeCurrentUser,
  updateCurrentUser,
} from '$/user';
import Item from '#/item';

const currentUser = useAppSelector((state) => state.userStore.currentUser);

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

  get publicUser(): User {
    return new User(
      this.id,
      '',
      this.name,
      this.ownerId,
      this.description,
      this.content,
      this.imgUrl,
      this.createdDate,
      this.modifiedDate,
      this.tags,
      this.followerIds,
      this.expertsIds,
      this.email,
      '',
      '',
      this.publicKey,
    );
  }

  public removeItem(): void {
    removeUser(this);
    if (this.id === currentUser.id) {
      this.removeCurrentUser();
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public updateItem(toNetwork = true): void {
    if (this.id === currentUser.id) {
      this.updateCurrentUser();
      updateUser(this.publicUser);
    } else {
      updateUser(this);
    }
  }

  /**
   * Add current user to the store
   */
  public addCurrentUser(toNetwork = false): void {
    addCurrentUser(this);
    this.publicUser.updateItem(toNetwork);
  }

  /**
   * Remove current user from the store
   */
  // eslint-disable-next-line class-methods-use-this
  private removeCurrentUser(): void {
    removeCurrentUser();
  }

  /**
   * Update current user in the store
   */
  private updateCurrentUser(): void {
    updateCurrentUser(this);
  }

  public toJSON(): object {
    return {
      ...super.toJSON(),
      email: this.email,
      peerId: this.peerId,
      privateKey: this.privateKey,
      publicKey: this.publicKey,
    };
  }
}

export default User;
