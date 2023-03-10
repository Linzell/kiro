import { useAppDispatch } from '$/hooks';
import {
  removeUser,
  updateUser,
  addCurrentUser,
  removeCurrentUser,
  updateCurrentUser,
} from '$/user';
import Item from '#/item';
import OnlineStateEnum from './enums/onlineStateEnum';

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
 * publicKey: string
 * )
 * ```
 */
class User extends Item {
  private Email: string;

  private PeerId: string;

  private PublicKey: string;

  private OnlineStatus: OnlineStateEnum;

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
    publicKey: string,
    onlineStatus: OnlineStateEnum,
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
    this.PublicKey = publicKey;
    this.OnlineStatus = onlineStatus;
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

  get publicKey(): string {
    return this.PublicKey;
  }

  set publicKey(value: string) {
    this.PublicKey = value;
  }

  get onlineStatus(): OnlineStateEnum {
    return this.OnlineStatus;
  }

  set onlineStatus(value: OnlineStateEnum) {
    this.OnlineStatus = value;
  }

  public removeItem(): void {
    const dispatch = useAppDispatch();
    dispatch(removeUser(this));
    /* if (this.id === this.CurrentUser.id) {
      this.removeCurrentUser();
    } */
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public updateItem(toNetwork = true): void {
    /* if (this.id === this.CurrentUser.id) {
      this.updateCurrentUser();
      updateUser(this);
    } else { */
    const dispatch = useAppDispatch();
    dispatch(updateUser(this));
    /* } */
  }

  /**
   * Add current user to the store
   */
  public addCurrentUser(toNetwork = false): void {
    const dispatch = useAppDispatch();
    dispatch(addCurrentUser(this));
    this.updateItem(toNetwork);
  }

  /**
   * Remove current user from the store
   */
  // eslint-disable-next-line class-methods-use-this
  public removeCurrentUser(): void {
    const dispatch = useAppDispatch();
    dispatch(removeCurrentUser());
  }

  /**
   * Update current user in the store
   */
  public updateCurrentUser(): void {
    const dispatch = useAppDispatch();
    dispatch(updateCurrentUser(this));
  }

  public getStatusColor(): 'primary' | 'secondary' | 'default' | 'error' | 'info' | 'success' | 'warning' | undefined {
    switch (this.OnlineStatus) {
      case OnlineStateEnum.ONLINE:
        return 'success';
      case OnlineStateEnum.OFFLINE:
        return 'error';
      case OnlineStateEnum.AWAY:
        return 'warning';
      default:
        return 'error';
    }
  }

  public toJSON(): object {
    return {
      ...super.toJSON(),
      email: this.email,
      peerId: this.peerId,
      publicKey: this.publicKey,
      onlineStatus: this.OnlineStatus,
    };
  }
}

export default User;
