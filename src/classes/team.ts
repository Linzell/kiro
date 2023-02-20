import { v4 as uuidv4 } from 'uuid';
import TeamStateInterface from '#/interfaces/TeamStateInterface';
import TeamState from '$/teamState';

interface TeamInterface {
  Id: string;
  Name: string;
  OwnerId: string;
  AdminsIds: string[];
  UsersIds: string[];
  Description: string;
}

/**
 * Team class
 * @class Team
 * @extends TeamState
 * @constructor
 * ```TS
 * constructor(
 * id: string,
 * name: string,
 * ownerId: string,
 * adminsIds: string[],
 * usersIds: string[],
 * description: string,
 * )
 * ```
 */
class Team implements TeamStateInterface {
  private teamInterface: TeamInterface;

  constructor(
    id: string,
    name: string,
    ownerId: string,
    adminsIds: string[],
    usersIds: string[],
    description: string,
  ) {
    this.teamInterface = {
      Id: id || uuidv4(),
      Name: name,
      OwnerId: ownerId,
      AdminsIds: adminsIds,
      UsersIds: usersIds,
      Description: description,
    };
  }

  get id(): string {
    return this.teamInterface.Id;
  }

  set id(id: string) {
    this.teamInterface.Id = id;
  }

  get name(): string {
    return this.teamInterface.Name;
  }

  set name(name: string) {
    this.teamInterface.Name = name;
  }

  get ownerId(): string {
    return this.teamInterface.OwnerId;
  }

  set ownerId(ownerId: string) {
    this.teamInterface.OwnerId = ownerId;
  }

  get adminsIds(): string[] {
    return this.teamInterface.AdminsIds;
  }

  set adminsIds(adminsIds: string[]) {
    this.teamInterface.AdminsIds = adminsIds;
  }

  get usersIds(): string[] {
    return this.teamInterface.UsersIds;
  }

  set usersIds(usersIds: string[]) {
    this.teamInterface.UsersIds = usersIds;
  }

  get description(): string {
    return this.teamInterface.Description;
  }

  set description(description: string) {
    this.teamInterface.Description = description;
  }

  /**
   * Update a team in the state
   * @param team The team to update
   */
  public updateTeam(): void {
    TeamState.updateTeam(this);
  }

  /**
   * Remove a team from the state
   * @param id The id of the team to remove
   */
  public removeTeam(): void {
    TeamState.removeTeamById(this.id);
  }
}

export default Team;
