import { Index } from '@fireproof/core';

const defineIndexes = (database: any) => {
  database.allLists = new Index(database, function (doc, map) {
    if (doc.type === 'list') map(doc.type, doc)
  })
  database.todosByList = new Index(database, function (doc, map) {
    if (doc.type === 'todo' && doc.listId) {
      map([doc.listId, doc.createdAt], doc)
    }
  })
  window.fireproof = database; // 🤫 for dev
  return database;
};

export default defineIndexes;
