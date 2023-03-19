import { ActivityItemChain } from "../../chain/activity";

export type BlockWithNewActivityEvent = {
  height: number;
};

export type NewActivityEvent = {
  id: Buffer;
};

export type GetActivityParam = {
  id: Buffer;
};

export type GetActivitiesParam = {
  identifier: string;
  key: string;
};

export type GetActivityGenesisParam = {
  identifier: string;
  key: string;
};

export type AddActivityParam = AddActivityPayload;

export type AddActivityPayload = Omit<
  ActivityItemChain,
  "previousActivityId" | "diff" | "patch" | "transaction" | "height" | "payload"
> & {
  transaction?: Buffer;
  payload?: Buffer;
  state?: { old: Record<string, unknown>; new: Record<string, unknown> };
};
