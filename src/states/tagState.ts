import React from 'react';
import Tag from '#/tag';

interface Props {
  tags: Map<string, Tag>;
}

interface State {
  tags: Map<string, Tag>;
}

class TagState extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      tags: props.tags,
    };
    TagState.addTag = TagState.addTag.bind(this);
    TagState.removeTagById = TagState.removeTagById.bind(this);
    TagState.updateTag = TagState.updateTag.bind(this);
  }

  componentDidMount(): void {
    this.setState({
      tags: this.props.tags,
    });
  }

  componentWillUnmount(): void {
    this.setState({
      tags: new Map<string, Tag>(),
    });
  }

  get tags(): Map<string, Tag> {
    return this.state.tags;
  }

  set tags(value: Map<string, Tag>) {
    this.setState({
      tags: value,
    });
  }

  /**
   * Add a tag to the state
   * @param tag The tag to add
   */
  static addTag: (
    tag: Tag
  ) => (tags: Map<string, Tag>) => void = (
      tag: Tag,
    ) => (tags: Map<string, Tag>) => {
      tags.set(tag.id, tag);
    };

  /**
   * Remove a tag from the state
   * @param id The id of the tag to remove
   */
  static removeTagById: (
    id: string
  ) => (tags: Map<string, Tag>) => void = (
      id: string,
    ) => (tags: Map<string, Tag>) => {
      tags.delete(id);
    };

  /**
   * Update a tag in the state
   * @param tag The tag to update
   */
  static updateTag: (
    tag: Tag
  ) => (tags: Map<string, Tag>) => void = (
      tag: Tag,
    ) => (tags: Map<string, Tag>) => {
      tags.set(tag.id, tag);
    };
}

export default TagState;
