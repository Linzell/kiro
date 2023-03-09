/* import Fireproof from 'fireproof'; */
import { removeFolder, updateFolder } from '$/folder';
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
    removeFolder(this);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async updateItem(toNetwork = true): Promise<void> {
    updateFolder(this);
    /* if (toNetwork) {
      const database = new Fireproof();
      await database.put(`folders/${this.id}`, this.toJSON());
    } */
  }

  public toJSON(): object {
    return {
      ...super.toJSON(),
      items: this.Items,
    };
  }
}

export default Folder;
