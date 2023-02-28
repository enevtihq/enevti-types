export type CommentItemChain = {
  date: number;
  creator: Buffer;
  cid: string;
  target: Buffer;
};

export type CommentListChain = {
  items: Buffer[];
};
