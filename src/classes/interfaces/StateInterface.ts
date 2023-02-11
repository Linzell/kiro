import Item from '#/item';

export default interface StateInterface {
  addItem: (item: Item) => void;
  updateItem: (item: Item) => void;
  deleteItem: (item: Item) => void;
}
