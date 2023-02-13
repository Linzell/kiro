import React from 'react';
import Folder from '#/folder';

interface Props {
  folders: Map<string, Folder>;
}

interface State {
  folders: Map<string, Folder>;
}

/**
 * FolderState
 * @extends React.Component
 */
abstract class FolderState extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      folders: props.folders,
    };
    FolderState.addFolder = FolderState.addFolder.bind(this);
    FolderState.removeFolderById = FolderState.removeFolderById.bind(this);
    FolderState.updateFolder = FolderState.updateFolder.bind(this);
  }

  componentDidMount(): void {
    this.setState({
      folders: this.props.folders,
    });
  }

  componentWillUnmount(): void {
    this.setState({
      folders: new Map<string, Folder>(),
    });
  }

  get folders(): Map<string, Folder> {
    return this.state.folders;
  }

  set folders(value: Map<string, Folder>) {
    this.setState({
      folders: value,
    });
  }

  static addFolder: (
    folder: Folder
  ) => (folders: Map<string, Folder>) => void = (
      folder: Folder,
    ) => (folders: Map<string, Folder>) => {
      folders.set(folder.id, folder);
    };

  static removeFolderById: (
    id: string
  ) => (folders: Map<string, Folder>) => void = (
      id: string,
    ) => (folders: Map<string, Folder>) => {
      folders.delete(id);
    };

  static updateFolder: (
    folder: Folder
  ) => (folders: Map<string, Folder>) => void = (
      folder: Folder,
    ) => (folders: Map<string, Folder>) => {
      folders.set(folder.id, folder);
    };
}

export default FolderState;
