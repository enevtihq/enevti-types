export type CommentItemChain = {
  date: bigint;
  creator: Buffer;
  cid: string;
  target: Buffer;
};

export type CommentListChain = {
  items: Buffer[];
};

export type ExclusiveCommentItemChain = CommentItemChain;

export type ExclusiveCommentListChain = CommentListChain;

export type ExclusiveReplyItemChain = CommentItemChain;

export type ExclusiveReplyListChain = CommentListChain;

export type LikedChain = {
  status: 0 | 1;
};

export type LikeChain = {
  address: Buffer[];
};

export type ExclusiveLikedChain = LikedChain;

export type ExclusiveLikeChain = LikeChain;
