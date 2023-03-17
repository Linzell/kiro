import { Index } from '@fireproof/core';

const defineIndexes = (database: any) => {
  database.allLists = new Index(database, (doc: any, map: any) => {
    if (doc.type === 'store') map(doc.type, doc);
  });
  /* database.todosByList = new Index(database, (doc: any, map: any) => {
    if (doc.type === 'todo' && doc.listId) {
      map([doc.listId, doc.createdAt], doc);
    }
  }); */
  window.fireproof = database; // 🤫 for dev
  console.log('🔥 Fireproof database created', database);
  return database;
};

export default defineIndexes;
