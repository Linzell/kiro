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

/**
 * Generates a new instance of a Team
 * @factoryMethod returns a new instance of a Team
 * @param name [Required] - name of the team
 * @param ownerId [Required] - id of the owner of the team
 * @param adminsIds - admin ids of the team
 * @param usersIds - user ids of the team
 * @param description - description of the team
 */
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
