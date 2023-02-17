import { Persona } from "../account/persona";
import { NFTPrice } from "../chain/nft/NFTPrice";

export type ActivityService = {
  transaction: string;
  name: string;
  date: number;
  to: Persona;
  value: NFTPrice;
};
