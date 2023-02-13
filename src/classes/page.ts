import Item from '#/item';
import PageState from '$/pageState';

class Page extends Item {
  private ParentId: string;

  constructor(
    id: string,
    cid: string,
    name: string,
    ownerId: string,
    description: string,
    content: string,
    imgUrl: string,
    createdDate: Date,
    modifiedDate: Date,
    tags: string[],
    followerIds: string[],
    expertsIds: string[],
    parentId: string,
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
    this.ParentId = parentId;
  }

  get parent(): string {
    return this.ParentId;
  }

  set parent(parentId: string) {
    this.ParentId = parentId;
  }

  // eslint-disable-next-line class-methods-use-this
  public addItem(page: Page): void {
    PageState.addPage(page);
  }

  // eslint-disable-next-line class-methods-use-this
  public removeItemById(id: string): void {
    PageState.removePageById(id);
  }

  // eslint-disable-next-line class-methods-use-this
  public updateItem(page: Page): void {
    PageState.updatePage(page);
  }
}

export default Page;
