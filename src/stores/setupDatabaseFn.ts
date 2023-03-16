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

export default async function loadFixtures(database: any) {
  const nextId = (prefix = '') => prefix + rand().toString(32).slice(2);
  const listTitles = ['Building Apps', 'Having Fun', 'Getting Groceries'];
  const todoTitles = [
    [
      'In the browser',
      'On the phone',
      'With or without Redux',
      'Login components',
      'GraphQL queries',
      'Automatic replication and versioning',
    ],
    ['Rollerskating meetup', 'Motorcycle ride', 'Write a sci-fi story with ChatGPT'],
    ['Macadamia nut milk', 'Avocado toast', 'Coffee', 'Bacon', 'Sourdough bread', 'Fruit salad'],
  ];
  let ok;
  for (let j = 0; j < 3; j + 1) {
    ok = await database.put({
      title: listTitles[j],
      type: 'list',
      // eslint-disable-next-line prefer-template
      _id: nextId('' + j),
    });
    for (let i = 0; i < todoTitles[j].length; i + 1) {
      await database.put({
        _id: nextId(),
        title: todoTitles[j][i],
        listId: ok.id,
        completed: rand() > 0.75,
        type: 'todo',
      });
    }
  }
}
