import Tag from '#/tag';

abstract class TagFactory {
  public abstract factoryMethod(
    name: string,
    ownerId: string,
  ): Tag;

  public someOperation(
    name: string,
    ownerId: string,
  ): string {
    const tag = this.factoryMethod(
      name,
      ownerId,
    );
    return `Tag: ${tag.name}`;
  }
}

class newTag extends TagFactory {
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
    colorTag = '',
  ): Tag {
    return new Tag(
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
      colorTag,
    );
  }
}

export default [newTag];
