import Page from '#/page';

abstract class PageFactory {
  public abstract factoryMethod(): Page;

  public someOperation(): string {
    const page = this.factoryMethod();
    return `Page: ${page.name}`;
  }
}

class newPage extends Page {
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

export default [PageFactory, newPage];
