import { removeTag, updateTag } from '$/tag';
import Item from '#/item';

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

  public removeItem(): void {
    removeTag(this);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public updateItem(toNetwork = true): void {
    updateTag(this);
  }

  public toJSON(): object {
    return {
      ...super.toJSON(),
      colorTag: this.colorTag,
    };
  }
}

export default Tag;
