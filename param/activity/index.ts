import { ActivityItemChain } from "../../chain/activity";

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

export type AddActivityParam = {
  oldState: Record<string, unknown>;
  newState: Record<string, unknown>;
  payload: AddActivityPayload;
};

export type AddActivityPayload = Omit<
  ActivityItemChain,
  "previousActivityId" | "diff" | "patch" | "transaction" | "height" | "payload"
> & { transaction?: Buffer; payload?: Buffer };
