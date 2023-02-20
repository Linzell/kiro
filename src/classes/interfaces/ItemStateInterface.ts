export default interface ItemStateInterface {
  updateItem: (toNetwork: boolean) => void;
  removeItem: () => void;
  toJSON: () => object;
// eslint-disable-next-line semi
}
