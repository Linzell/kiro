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
class NewTeam extends TeamCreator {
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

/**
 * Generates a new instance of a Team from a json payload
 * @factoryMethod returns a new instance of a Team
 * @param jsonPayload [Required] - json payload of the team
 */
class CreateTeamFromJson extends TeamCreator {
  // eslint-disable-next-line class-methods-use-this
  public factoryMethod(jsonPayload: any): Team {
    return new Team(
      jsonPayload.id,
      jsonPayload.name,
      jsonPayload.ownerId,
      jsonPayload.adminsIds,
      jsonPayload.usersIds,
      jsonPayload.description,
    );
  }
}

export default { NewTeam, CreateTeamFromJson };
