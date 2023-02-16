import Item from '#/item';
import TagState from '$/tagState';

/**
 * Tag class
 * @class Tag
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
 * colorTag: string,
 * )
 * ```
 */
class Tag extends Item {
  private ColorTag: string;

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
    colorTag: string,
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
    this.ColorTag = colorTag;
  }

  get colorTag(): string {
    return this.ColorTag;
  }

  set colorTag(colorTag: string) {
    this.ColorTag = colorTag;
  }

  // eslint-disable-next-line class-methods-use-this
  public addItem(tag: Tag): void {
    TagState.addTag(tag);
  }

  // eslint-disable-next-line class-methods-use-this
  public removeItemById(id: string): void {
    TagState.removeTagById(id);
  }

  // eslint-disable-next-line class-methods-use-this
  public updateItem(tag: Tag): void {
    TagState.updateTag(tag);
  }
}

export default Tag;
