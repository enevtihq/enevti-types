export type CommentItemChain = {
  date: bigint;
  creator: Buffer;
  cid: string;
  target: Buffer;
};

export type CommentListChain = {
  items: Buffer[];
};
