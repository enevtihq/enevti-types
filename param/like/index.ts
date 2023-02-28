import { ReducerHandler } from "../../utils/reducerHandler";

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
