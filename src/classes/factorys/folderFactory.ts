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

/**
 * Generates a new instance of a Folder
 * @factoryMethod returns a new instance of a Folder
 * @param name [Required] - name of the folder
 * @param ownerId [Required] - id of the owner of the folder
 * @param description - description of the folder
 * @param content - content of the folder
 * @param imgUrl - image url of the folder
 * @param tags - tags of the folder
 * @param followerIds - follower ids of the folder
 * @param expertsIds - expert ids of the folder
 * @param items - items of the folder
 */
class newFolder extends FolderCreator {
  // eslint-disable-next-line class-methods-use-this
  public factoryMethod(
    name: string,
    ownerId: string,
    description = 'A new Folder',
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
