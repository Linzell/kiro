import Team from '#/team';

abstract class TeamCreator {
  public abstract factoryMethod(
    name: string,
    ownerId: string,
  ): Team;

  public someOperation(): string {
    const team = this.factoryMethod(
      'New Team',
      '123456789',
    );
    return `Team: ${team.name}`;
  }
}

class newTeam extends TeamCreator {
  // eslint-disable-next-line class-methods-use-this
  public factoryMethod(
    name: string,
    ownerId: string,
    adminsIds = [ownerId],
    usersIds = [ownerId],
    description = '',
  ): Team {
    return new Team(
      '',
      name,
      ownerId,
      adminsIds,
      usersIds,
      description,
    );
  }
}

export default [newTeam];
