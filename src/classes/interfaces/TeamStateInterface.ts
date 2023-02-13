import Team from '#/team';

export default interface TeamStateInterface {
  addTeam: (team: Team) => void;
  updateTeam: (team: Team) => void;
  removeTeamById: (id: string) => void;
// eslint-disable-next-line semi
}
