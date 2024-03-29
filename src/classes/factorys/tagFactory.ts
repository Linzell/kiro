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

/**
 * Generates a new instance of a Tag
 * @factoryMethod returns a new instance of a Tag
 * @param name [Required] - name of the tag
 * @param ownerId [Required] - id of the owner of the tag
 * @param description - description of the tag
 * @param content - content of the tag
 * @param imgUrl - image url of the tag
 * @param tags - tags of the tag
 * @param followerIds - follower ids of the tag
 * @param expertsIds - expert ids of the tag
 * @param colorTag - color of the tag
 */
class NewTag extends TagFactory {
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
    colorTag = '#d3d3d3',
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

/**
 * Generates a new instance of a Tag from a json payload
 * @factoryMethod returns a new instance of a Tag
 * @param jsonPayload [Required] - json payload of the tag
 */
class CreateTagFromJson extends TagFactory {
  // eslint-disable-next-line class-methods-use-this
  public factoryMethod(jsonPayload: any): Tag {
    return new Tag(
      jsonPayload.id,
      jsonPayload.cid,
      jsonPayload.name,
      jsonPayload.ownerId,
      jsonPayload.description,
      jsonPayload.content,
      jsonPayload.imgUrl,
      jsonPayload.createdDate,
      jsonPayload.modifiedDate,
      jsonPayload.tags,
      jsonPayload.followerIds,
      jsonPayload.expertsIds,
      jsonPayload.colorTag,
    );
  }
}

export default { NewTag, CreateTagFromJson };
