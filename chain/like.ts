export type LikeSentChain = {
  total: number;
  items: {
    identifier: string;
    count: number;
  }[];
};

export type LikedChain = {
  status: 0 | 1;
};

export type LikeChain = {
  address: Buffer[];
};
