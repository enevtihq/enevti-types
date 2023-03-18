export type ServeRateChain = {
  score: number;
  items: {
    id: Buffer;
    nonce: number;
    owner: Buffer;
    status: 0 | 1;
  }[];
};
