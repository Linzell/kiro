export default interface TeamStateInterface {
  updateTeam: (toNetwork: boolean) => void;
  removeTeam: () => void;
  toJSON: () => object;
// eslint-disable-next-line semi
}
