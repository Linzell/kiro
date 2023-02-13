import React from 'react';
import Team from '#/team';

interface Props {
  teams : Map<string, Team>;
}

interface State {
  teams : Map<string, Team>;
}

/**
 * TeamState
 * @extends React.Component
 */
abstract class TeamState extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      teams: props.teams,
    };
    TeamState.addTeam = TeamState.addTeam.bind(this);
    TeamState.removeTeamById = TeamState.removeTeamById.bind(this);
    TeamState.updateTeam = TeamState.updateTeam.bind(this);
  }

  componentDidMount(): void {
    this.setState({
      teams: this.props.teams,
    });
  }

  componentWillUnmount(): void {
    this.setState({
      teams: new Map<string, Team>(),
    });
  }

  get teams(): Map<string, Team> {
    return this.state.teams;
  }

  set teams(value: Map<string, Team>) {
    this.setState({
      teams: value,
    });
  }

  /**
   * Add a team to the state
   * @param team The team to add
   */
  static addTeam: (
    team: Team
  )=> (teams: Map<string, Team>) => void = (
      team: Team,
    ) => (teams: Map<string, Team>) => {
      teams.set(team.id, team);
    };

  /**
   * Remove a team from the state
   * @param id The id of the team to remove
   */
  static removeTeamById: (
    id: string
  ) => (teams: Map<string, Team>) => void = (
      id: string,
    ) => (teams: Map<string, Team>) => {
      teams.delete(id);
    };

  /**
   * Update a team in the state
   * @param team The team to update
   */
  static updateTeam: (
    team: Team
  ) => (teams: Map<string, Team>) => void = (
      team: Team,
    ) => (teams: Map<string, Team>) => {
      teams.set(team.id, team);
    };
}

export default TeamState;
