import { Persona, PersonaAsset } from "../account/persona";
import { ActivityService } from "../service/activity";
import { NFTBase } from "./nft";
import { NFTContent } from "./nft/NFTContent";

export type MomentSlotChain = {
  items: Buffer[];
};

export type AllMoment = {
  items: Buffer[];
};

export type MomentActivityName = "minted";

export type MomentActivity = Omit<ActivityService, "name"> & {
  name: MomentActivityName;
};

export type MomentActivityAsset = Buffer;

export type MomentAtAsset = {
  moment: Buffer[];
};

export interface Moment {
  id: string;
  cover: NFTContent;
  like: number;
  text: string;
  textPlain?: string;
  liked?: boolean;

  nftId: string;
  nft?: NFTBase;
  owner: Persona;
  creator: Persona;
  data: NFTContent;
  comment: number;
  clubs: number;
  createdOn: number;
  activity?: MomentActivity[];
}

export type MomentBase = Moment;

export interface MomentAsset
  extends Omit<
    Moment,
    | "id"
    | "nftId"
    | "activity"
    | "owner"
    | "creator"
    | "createdOn"
    | "textPlain"
    | "nft"
    | "liked"
  > {
  id: Buffer;
  nftId: Buffer;
  owner: PersonaAsset;
  creator: PersonaAsset;
  createdOn: bigint;
}
