export type WonRaffleEvent = {
  collection: Buffer;
  address: Buffer;
  items: Buffer[];
};

export type NewRaffledEvent = {
  collection: Buffer;
  address: Buffer;
  total: number;
};

export type GetRecordParam = {
  height: number;
};
