import Item from '#/item';

export default interface ItemStateInterface {
  addItem: (item: Item) => void;
  updateItem: (item: Item) => void;
  removeItemById: (id: string) => void;
// eslint-disable-next-line semi
}
