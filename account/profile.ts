import { NFTBase } from "../chain/nft";
import { CollectionBase } from "../chain/collection";
import { SocialProfile } from "./social";
import { Persona } from "./persona";
import { MomentBase } from "../chain/moment";
import { ActivityService } from "../service/activity";

export type ProfileAPIVersion = {
  owned: number;
  onSale: number;
  momentCreated: number;
  collection: number;
};

export type ProfileAPIResponse = Profile & {
  persona?: Persona;
};

export type ProfileView = Profile & { persona: Persona };

export type Profile = {
  balance: string;
  stake: string;
  social: SocialProfile;
  nftSold: number;
  treasuryAct: number;
  serveRate: number;
  owned: NFTBase[];
  onSale: NFTBase[];
  collection: CollectionBase[];
  pending: number;
  raffled: number;
  likeSent: number;
  commentSent: number;
  momentSlot: number;
  momentCreated: MomentBase[];
};

export type RedeemableNFTAccountStatsChain = {
  nftSold: Buffer[];
  treasuryAct: Buffer[];
  raffled: Buffer[];
  momentSlot: Buffer[];
  serveRate: {
    score: number;
    items: {
      id: Buffer;
      nonce: number;
      owner: Buffer;
      status: 0 | 1;
    }[];
  };
  likeSent: {
    total: number;
    nft: Buffer[];
    moment: Buffer[];
    collection: Buffer[];
    comment: Buffer[];
    reply: Buffer[];
    commentClubs: Buffer[];
    replyClubs: Buffer[];
  };
  commentSent: {
    total: number;
    comment: Buffer[];
    reply: Buffer[];
  };
  commentClubsSent: {
    total: number;
    comment: Buffer[];
    reply: Buffer[];
  };
};

export type RedeemableNFTAccountProps = {
  redeemableNft: {
    nftSold: number;
    treasuryAct: number;
    serveRate: number;
    raffled: number;
    momentSlot: number;
    likeSent: number;
    commentSent: number;
    commentClubsSent: number;
    owned: Buffer[];
    onSale: Buffer[];
    momentCreated: Buffer[];
    collection: Buffer[];
    pending: Buffer[];
  };
};

export type CreaFiAccountProps = {
  creatorFinance: {
    totalStake: bigint;
  };
};

export type ProfileActivityName =
  | "tokenSent"
  | "tokenReceived"
  | "registerUsername"
  | "addStake"
  | "selfStake"
  | "createNFT"
  | "mintNFT"
  | "NFTSale"
  | "deliverSecret"
  | "winRaffle"
  | "momentCreated";

export type ProfileActivity = Omit<ActivityService, "name"> & {
  name: ProfileActivityName;
  from: Persona;
  payload: Record<string, unknown>;
  fee: string;
};

export type ProfileActivityAsset = Buffer;

export type EngagementActivityName =
  | "likeNft"
  | "likeCollection"
  | "likeComment"
  | "likeReply"
  | "likeMoment"
  | "likeCommentClubs"
  | "likeReplyClubs"
  | "commentNft"
  | "commentCollection"
  | "commentMoment"
  | "replyComment"
  | "replyCommentClubs"
  | "commentCollectionClubs"
  | "commentNftClubs"
  | "commentMomentClubs"
  | "setVideoCallAnswered"
  | "setVideoCallRejected";

export type EngagementActivity = Omit<
  ActivityService,
  "name" | "to" | "value"
> & {
  name: EngagementActivityName;
  target: Record<string, unknown>;
};

export type EngagementActivityAsset = Buffer;
