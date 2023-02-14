import Folder from '#/folder';

abstract class FolderCreator {
  public abstract factoryMethod(
    name: string,
    ownerId: string,
  ): Folder;

  public someOperation(
    name: string,
    ownerId: string,
  ): string {
    const folder = this.factoryMethod(
      name,
      ownerId,
    );
    return `Folder: ${folder.name}`;
  }
}

class newFolder extends FolderCreator {
  // eslint-disable-next-line class-methods-use-this
  public factoryMethod(
    name: string,
    ownerId: string,
    description = '',
    content = '',
    imgUrl = '',
    tags = [],
    followerIds = [],
    expertsIds = [],
    items = [],
  ): Folder {
    return new Folder(
      '',
      '',
      name,
      ownerId,
      description,
      content,
      imgUrl,
      new Date(),
      new Date(),
      tags,
      followerIds,
      expertsIds,
      items,
    );
  }
}

export default [newFolder];
