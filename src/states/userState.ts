import * as React from 'react';
import User from '#/user';

interface Props {
  users: Map<string, User>;
}

interface State {
  users: Map<string, User>;
}

/**
 * UserState
 * @extends React.Component
 */
abstract class UserState extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      users: props.users,
    };
    UserState.addUser = UserState.addUser.bind(this);
    UserState.removeUserById = UserState.removeUserById.bind(this);
    UserState.updateUser = UserState.updateUser.bind(this);
  }

  componentDidMount(): void {
    this.setState({
      users: this.props.users,
    });
  }

  componentWillUnmount(): void {
    this.setState({
      users: new Map<string, User>(),
    });
  }

  get users(): Map<string, User> {
    return this.state.users;
  }

  set users(value: Map<string, User>) {
    this.setState({
      users: value,
    });
  }

  /**
   * Add a user to the state
   * @param user The user to add
   */
  static addUser: (user: User)
    => (users: Map<string, User>) => void = (user: User) => (users: Map<string, User>) => {
      users.set(user.id, user);
    };

  /**
   * Remove a user from the state
   * @param id The id of the user to remove
   */
  static removeUserById: (id: string)
    => (users: Map<string, User>) => void = (id: string) => (users: Map<string, User>) => {
      users.delete(id);
    };

  /**
   * Update a user in the state
   * @param user The user to update
   */
  static updateUser: (user: User)
    => (users: Map<string, User>) => void = (user: User) => (users: Map<string, User>) => {
      users.set(user.id, user);
    };
}

export default UserState;
