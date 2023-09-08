export interface Pokemon {
  id: number;
  name: string;
  types: Array<any>;
  stats: Array<any>;
  sprites: {
    front_default: string;
  };
}
