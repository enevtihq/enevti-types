import { ReducerHandler } from "../../utils/reducerHandler";

export type NewBlockRecordEvent = {
  height: number;
};

export type GetCollectionRaffleConfig = {
  id: Buffer;
};

export type SetCollectionRaffleConfig = {
  id: Buffer;
  activated: boolean;
};

export type GetRecordParam = {
  height: number;
};

export type GetCollectionEligibilityParam = {
  reducerHandler: ReducerHandler;
  id: Buffer;
};
