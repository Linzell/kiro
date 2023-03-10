import { useAppDispatch } from '$/hooks';
import { removePage, updatePage } from '$/page';
import Item from '#/item';

/**
 * Page class
 * @class Page
 * @extends Item
 * @constructor
 * ```TS
 * constructor(
 * id: string,
 * cid: string,
 * name: string,
 * ownerId: string,
 * description: string
 * content: string,
 * imgUrl: string,
 * createdDate: Date,
 * modifiedDate: Date,
 * tags: string[],
 * followerIds: string[],
 * expertsIds: string[],
 * parentId: string,
 * )
 * ```
 */
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

  get parentId(): string {
    return this.ParentId;
  }

  set parentId(parentId: string) {
    this.ParentId = parentId;
  }

  public removeItem(): void {
    const dispatch = useAppDispatch();
    dispatch(removePage(this));
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public updateItem(toNetwork = true): void {
    const dispatch = useAppDispatch();
    dispatch(updatePage(this));
  }

  public toJSON(): object {
    return {
      ...super.toJSON(),
      parentId: this.parentId,
    };
  }
}

export default Page;
