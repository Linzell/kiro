import Item from '#/item';

export default interface StateInterface {
  addItem: (item: Item) => void;
  updateItem: (item: Item) => void;
  deleteItemById: (id: string) => void;
// eslint-disable-next-line semi
}
