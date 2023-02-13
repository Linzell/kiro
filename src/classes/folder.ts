import Item from '#/item';
import FolderState from '$/folderState';

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

  // eslint-disable-next-line class-methods-use-this
  public addItem(folder: Folder): void {
    FolderState.addFolder(folder);
  }

  // eslint-disable-next-line class-methods-use-this
  public removeItemById(id: string): void {
    FolderState.removeFolderById(id);
  }

  // eslint-disable-next-line class-methods-use-this
  public updateItem(folder: Folder): void {
    FolderState.updateFolder(folder);
  }
}

export default Folder;
