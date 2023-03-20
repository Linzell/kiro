import FolderFactory from '#/factorys/folderFactory';
import PageFactory from '#/factorys/pageFactory';
import TagFactory from '#/factorys/tagFactory';
import TeamFactory from '#/factorys/teamFactory';
import UserFactory from '#/factorys/userFactory';
import Folder from '#/folder';
import Page from '#/page';
import Tag from '#/tag';
import Team from '#/team';
import User from '#/user';

/**
 * Get folder store from local storage
 * @returns {Folder[]} folder store
 */
function getFolderStore(): Folder[] {
  const folderStoreJson = localStorage.getItem('folderStore');
  if (folderStoreJson) {
    const folderStore = JSON.parse(folderStoreJson);
    return folderStore.map((folder: Folder) => new FolderFactory
      .CreateFolderFromJson().factoryMethod(folder));
  }
  return [];
}

/**
 * Get page store from local storage
 * @returns {Page[]} page store
 */
function getPageStore(): Page[] {
  const pageStoreJson = localStorage.getItem('pageStore');
  if (pageStoreJson) {
    const pageStore = JSON.parse(pageStoreJson);
    return pageStore.map((page: Page) => new PageFactory
      .CreatePageFromJson().factoryMethod(page));
  }
  return [];
}

/**
 * Get tag store from local storage
 * @returns {Tag[]} tag store
 */
function getTagStore(): Tag[] {
  const tagStoreJson = localStorage.getItem('tagStore');
  if (tagStoreJson) {
    const tagStore = JSON.parse(tagStoreJson);
    return tagStore.map((tag: Tag) => new TagFactory
      .CreateTagFromJson().factoryMethod(tag));
  }
  return [];
}

/**
 * Get team store from local storage
 * @returns {Team[]} team store
 */
function getTeamStore(): Team[] {
  const teamStoreJson = localStorage.getItem('teamStore');
  if (teamStoreJson) {
    const teamStore = JSON.parse(teamStoreJson);
    return teamStore.map((team: Team) => new TeamFactory
      .CreateTeamFromJson().factoryMethod(team));
  }
  return [];
}

function getUserStore(): User[] {
  const userStoreJson = localStorage.getItem('userStore');
  if (userStoreJson) {
    const userStore = JSON.parse(userStoreJson);
    return userStore.map((user: User) => new UserFactory
      .CreateUserFromJson().factoryMethod(user));
  }
  return [];
}

function getCurrentUser(): User {
  const currentUserJson = localStorage.getItem('currentUser');
  if (currentUserJson) {
    const currentUser = JSON.parse(currentUserJson);
    return new UserFactory
      .CreateUserFromJson().factoryMethod(currentUser);
  }
  return new UserFactory.NewUser().factoryMethod(
    '123456789',
    'd4fg56df4g654df65g4d65f4g65df4',
  );
}

/**
 * Get data store from local storage
 */
export {
  getFolderStore,
  getPageStore,
  getTagStore,
  getTeamStore,
  getUserStore,
  getCurrentUser,
};
