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

class newPage extends PageCreator {
  // eslint-disable-next-line class-methods-use-this
  public factoryMethod(
    name: string,
    ownerId: string,
    parentId: string,
    description = '',
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
