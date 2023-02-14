import Team from '#/team';

abstract class TeamCreator {
  public abstract factoryMethod(
    name: string,
    ownerId: string,
  ): Team;

  public someOperation(
    name: string,
    ownerId: string,
  ): string {
    const team = this.factoryMethod(
      name,
      ownerId,
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
