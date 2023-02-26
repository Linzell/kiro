import { removeFolderById, updateFolder } from 'src/stores/folder';
import Item from '#/item';

/**
 * Folder class
 * @class Folder
 * @extends Item
 * @constructor
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
 * items: Item[],
 * )
 * ```
 */
class Folder extends Item {
  private Items: Item[];

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
    items: Item[],
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
    this.Items = items;
  }

  get items() {
    return this.Items;
  }

  set items(value: Item[]) {
    this.Items = value;
  }

  public removeItem(): void {
    removeFolderById({ id: this.id });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public updateItem(toNetwork: boolean): void {
    updateFolder(this);
  }

  public toJSON(): object {
    return {
      ...super.toJSON(),
      items: this.Items,
    };
  }
}

export default Folder;
