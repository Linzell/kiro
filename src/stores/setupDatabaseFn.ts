/* eslint-disable no-await-in-loop */
/* eslint-disable no-bitwise */
function mulberry32(a: number) {
  return function _() {
    // eslint-disable-next-line no-multi-assign
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = mulberry32(1); // determinstic fixtures

// TODO: Prendre les données depuis les Factory

function initFolderStore() {
  return [];
}

function initPageStore() {
  return [];
}

function initTagStore() {
  return [];
}

function initTeamStore() {
  return [];
}

function initUserStore() {
  return [];
}

export default async function loadFixtures<T>(database: any): Promise<T> {
  const nextId = (prefix = '') => prefix + rand().toString(32).slice(2);
  const listStores = ['folder', 'page', 'tag', 'team', 'user'];
  const storesDataBase = [
    initFolderStore(),
    initPageStore(),
    initTagStore(),
    initTeamStore(),
    initUserStore(),
  ];
  let ok;
  await Promise.all(listStores.map(async (listStore, index) => {
    ok = await database.put({
      title: listStore,
      type: 'store',
      // eslint-disable-next-line prefer-template
      _id: nextId('' + index),
    });
    storesDataBase[index].map(async (store: any) => {
      await database.put(store);
    });
  }));
  return ok as T;
}
