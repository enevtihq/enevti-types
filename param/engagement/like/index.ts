import { ReducerHandler } from "../../../utils/reducerHandler";

export type NewLikeEvent = {
  identifier: string;
  id: string;
  senderAddress: Buffer;
};

export type GetLikeParam = {
  identifier: string;
  target: string;
};

export type GetLikedParam = {
  target: string;
  address: Buffer;
};

export type AddLikeParam = {
  reducerHandler: ReducerHandler;
  identifier: string;
  target: string;
  senderAddress: Buffer;
};

export type NewExclusiveLikeEvent = NewLikeEvent;

export type GetExclusiveLikeParam = GetLikeParam;

export type GetExclusiveLikedParam = GetLikedParam;

export type AddExclusiveLikeParam = AddLikeParam;
