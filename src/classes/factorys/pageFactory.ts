import Page from '#/page';

abstract class PageCreator {
  public abstract factoryMethod(
    name: string,
    ownerId: string,
    parentId: string,
  ): Page;

  public someOperation(
    name: string,
    ownerId: string,
    parentId: string,
  ): string {
    const page = this.factoryMethod(
      name,
      ownerId,
      parentId,
    );
    return `Page: ${page.name}`;
  }
}

/**
 * Generates a new instance of a Page
 * @factoryMethod returns a new instance of a Page
 * @param name [Required] - name of the page
 * @param ownerId [Required] - id of the owner of the page
 * @param parentId [Required] - id of the parent of the page
 * @param description - description of the page
 * @param content - content of the page
 * @param imgUrl - image url of the page
 * @param tags - tags of the page
 * @param followerIds - follower ids of the page
 * @param expertsIds - expert ids of the page
 */
class newPage extends PageCreator {
  // eslint-disable-next-line class-methods-use-this
  public factoryMethod(
    name: string,
    ownerId: string,
    parentId: string,
    description = 'A new Page',
    content = '',
    imgUrl = '',
    tags = [],
    followerIds = [],
    expertsIds = [],
  ): Page {
    return new Page(
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
      parentId,
    );
  }
}

export default [newPage];
