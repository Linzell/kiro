import * as React from 'react';

interface Props {
  Id: string;
  CID: string;
  Name: string;
  OwnerId: string;
  Description: string;
  Content: string;
  ImgUrl: string;
  Created: Date;
  Modified: Date;
  Tags: string[];
  FollowerIds: string[];
  ExpertsIds: string[];
}

interface State {
  id: string;
  cid: string;
  name: string;
  ownerId: string;
  description: string;
  content: string;
  imgUrl: string;
  created: Date;
  modified: Date;
  tags: string[];
  followerIds: string[];
  expertsIds: string[];
}

class Item extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      id: props.Id,
      cid: props.CID,
      name: props.Name,
      ownerId: props.OwnerId,
      description: props.Description,
      content: props.Content,
      imgUrl: props.ImgUrl,
      created: props.Created,
      modified: props.Modified,
      tags: props.Tags,
      followerIds: props.FollowerIds,
      expertsIds: props.ExpertsIds,
    };
  }

  get id() {
    return this.state.id;
  }

  set id(value: string) {
    this.setState({ id: value });
  }

  get cid() {
    return this.state.cid;
  }

  set cid(value: string) {
    this.setState({ cid: value });
  }

  get name() {
    return this.state.name;
  }

  set name(value: string) {
    this.setState({ name: value });
  }

  get ownerId() {
    return this.state.ownerId;
  }

  set ownerId(value: string) {
    this.setState({ ownerId: value });
  }

  get description() {
    return this.state.description;
  }

  set description(value: string) {
    this.setState({ description: value });
  }

  get content() {
    return this.state.content;
  }

  set content(value: string) {
    this.setState({ content: value });
  }

  get imgUrl() {
    return this.state.imgUrl;
  }

  set imgUrl(value: string) {
    this.setState({ imgUrl: value });
  }

  get created() {
    return this.state.created;
  }

  set created(value: Date) {
    this.setState({ created: value });
  }

  get modified() {
    return this.state.modified;
  }

  set modified(value: Date) {
    this.setState({ modified: value });
  }

  get tags() {
    return this.state.tags;
  }

  set tags(value: string[]) {
    this.setState({ tags: value });
  }

  get followerIds() {
    return this.state.followerIds;
  }

  set followerIds(value: string[]) {
    this.setState({ followerIds: value });
  }

  get expertsIds() {
    return this.state.expertsIds;
  }

  set expertsIds(value: string[]) {
    this.setState({ expertsIds: value });
  }

  updateItem = (item: Item) => {
    this.setState({
      id: item.id,
      cid: item.cid,
      name: item.name,
      ownerId: item.ownerId,
      description: item.description,
      content: item.content,
      imgUrl: item.imgUrl,
      created: item.created,
      modified: item.modified,
      tags: item.tags,
      followerIds: item.followerIds,
      expertsIds: item.expertsIds,
    });
  };
}

export default Item;
