import { NFTBase } from "./nft";
import { NFTPrice, NFTPriceAsset } from "./nft/NFTPrice";
import { Persona, PersonaAsset } from "../account/persona";
import { NFTContent } from "./nft/NFTContent";
import { SocialProfile, SocialProfileAsset } from "../account/social";
import { NFTType } from "./nft/NFTType";
import { MomentBase } from "./moment";
import { ActivityService } from "../service/activity";

export type AllCollection = {
  items: Buffer[];
};

export type CollectionActivityName =
  | "created"
  | "minted"
  | "raffled"
  | "secretDelivered"
  | "videoCallAnswered"
  | "videoCallRejected"
  | "momentCreated";

export type CollectionActivity = Omit<ActivityService, "name"> & {
  name: CollectionActivityName;
  nfts: NFTBase[];
};

export type CollectionActivityAsset = Buffer;

export type CollectionBase = {
  id: string;
  name: string;
  cover: NFTContent;
  stat: {
    minted: number;
    owner: number;
    redeemed: number;
    floor: NFTPrice;
    volume: NFTPrice;
  };
  minting: {
    total: number;
    available: number;
    expire: number;
    price: NFTPrice;
  };
};

export interface Collection extends CollectionBase {
  collectionType: NFTType;
  mintingType: string;
  description: string;
  symbol: string;
  createdOn: number;
  like: number;
  comment: number;
  clubs: number;
  social: SocialProfile;
  packSize: number;
  minted: NFTBase[];
  creator: Persona;
  activity: CollectionActivity[];
  moment: MomentBase[];
  promoted: boolean;
  raffled: number;
  liked?: boolean;
}

export interface CollectionAsset
  extends Omit<
    Collection,
    | "creator"
    | "id"
    | "minted"
    | "activity"
    | "social"
    | "stat"
    | "minting"
    | "createdOn"
    | "moment"
    | "liked"
  > {
  id: Buffer;
  creator: PersonaAsset;
  minted: Buffer[];
  social: SocialProfileAsset;
  createdOn: bigint;
  stat: {
    minted: number;
    owner: Buffer[];
    redeemed: number;
    floor: NFTPriceAsset;
    volume: NFTPriceAsset;
  };
  minting: {
    total: Buffer[];
    available: Buffer[];
    expire: number;
    price: NFTPriceAsset;
  };
}
