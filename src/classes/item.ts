import { v4 as uuidv4 } from 'uuid';
import StateInterface from '#/interfaces/StateInterface';

interface ItemInterface {
  Id: string;
  CID: string;
  Name: string;
  OwnerId: string;
  Description: string;
  Content: string;
  ImgUrl: string;
  CreatedDate : Date;
  ModifiedDate : Date;
  Tags: string[];
  FollowerIds: string[];
  ExpertsIds: string[];
}

/**
 * Item class
 * @class Item
 * @constructor
 * ```TS
 * constructor(
 * id: string,
 * cid: string,
 * name: string,
 * description: string
 * content: string,
 * imgUrl: string
 * createdDate : Date,
 * modifiedDate : Date,
 * tags: string
 * followerIds: string[],
 * expertsIds: string[]
 * )
 * ```
 */
abstract class Item implements StateInterface {
  private itemInterface: ItemInterface;

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
  ) {
    this.itemInterface = {
      Id: id || uuidv4(),
      CID: cid,
      Name: name,
      OwnerId: ownerId,
      Description: description,
      Content: content,
      ImgUrl: imgUrl,
      CreatedDate: createdDate,
      ModifiedDate: modifiedDate,
      Tags: tags,
      FollowerIds: followerIds,
      ExpertsIds: expertsIds,
    };
  }

  get id() {
    return this.itemInterface.Id;
  }

  set id(value: string) {
    this.itemInterface.Id = value;
  }

  get cid() {
    return this.itemInterface.CID;
  }

  set cid(value: string) {
    this.itemInterface.CID = value;
  }

  get name() {
    return this.itemInterface.Name;
  }

  set name(value: string) {
    this.itemInterface.Name = value;
  }

  get ownerId() {
    return this.itemInterface.OwnerId;
  }

  set ownerId(value: string) {
    this.itemInterface.OwnerId = value;
  }

  get description() {
    return this.itemInterface.Description;
  }

  set description(value: string) {
    this.itemInterface.Description = value;
  }

  get content() {
    return this.itemInterface.Content;
  }

  set content(value: string) {
    this.itemInterface.Content = value;
  }

  get imgUrl() {
    return this.itemInterface.ImgUrl;
  }

  set imgUrl(value: string) {
    this.itemInterface.ImgUrl = value;
  }

  get createdDate() {
    return this.itemInterface.CreatedDate;
  }

  set createdDate(value: Date) {
    this.itemInterface.CreatedDate = value;
  }

  get modifiedDate() {
    return this.itemInterface.ModifiedDate;
  }

  set modifiedDate(value: Date) {
    this.itemInterface.ModifiedDate = value;
  }

  get tags() {
    return this.itemInterface.Tags;
  }

  set tags(value: string[]) {
    this.itemInterface.Tags = value;
  }

  get followerIds() {
    return this.itemInterface.FollowerIds;
  }

  set followerIds(value: string[]) {
    this.itemInterface.FollowerIds = value;
  }

  get expertsIds() {
    return this.itemInterface.ExpertsIds;
  }

  set expertsIds(value: string[]) {
    this.itemInterface.ExpertsIds = value;
  }

  /**
   * Add a new item to the database
   * @param item The item to add
   */
  public abstract addItem(item: Item): void;

  /**
   * Update an existing item in the database
   * @param item The item to update
   */
  public abstract updateItem(item: Item): void;

  /**
   * Delete an existing item from the database
   * @param id The id of the item to delete
   */
  public abstract deleteItemById(id: string): void;
}

export default Item;
