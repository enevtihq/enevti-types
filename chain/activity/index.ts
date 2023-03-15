export type ActivityItemChain = {
  key: string;
  type: string;
  previousActivityId: Buffer;
  transaction: Buffer;
  height: number;
  diff: string;
  patch: string[];
  amount: bigint;
  payload: Buffer;
};

export type ActivityListChain = {
  items: Buffer[];
};

export type ActivityGenesisChain = {
  state: string;
};
