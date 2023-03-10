import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from '$/hooks';
import { removeTeam, updateTeam } from '$/team';
import TeamStateInterface from '#/interfaces/TeamStateInterface';

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
   * Delete an existing team from the database
   */
  public removeTeam(): void {
    const dispatch = useAppDispatch();
    dispatch(removeTeam(this));
  }

  /**
   * Update an existing team in the database
   * @param toNetwork — If true, update the item on the network
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public updateTeam(toNetwork = true): void {
    const dispatch = useAppDispatch();
    dispatch(updateTeam(this));
  }

  /**
   * Convert the team to a JSON object
   */
  public toJSON(): object {
    return {
      id: this.id,
      name: this.name,
      ownerId: this.ownerId,
      adminsIds: this.adminsIds,
      usersIds: this.usersIds,
      description: this.description,
    };
  }
}

export default Team;
