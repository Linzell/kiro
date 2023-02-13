import Team from '#/team';

abstract class TeamCreator {
  public abstract factoryMethod(): Team;

  public someOperation(): string {
    const team = this.factoryMethod();
    return `Team: ${team.name}`;
  }
}

class newTeam extends Team {
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

export default [TeamCreator, newTeam];
