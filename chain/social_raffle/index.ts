export type SocialRaffleChain = {
  pool: bigint;
  registrar: SocialRaffleRegistrarItem[];
};

export type SocialRaffleRegistrarItem = {
  id: Buffer;
  weight: bigint;
  candidate: Buffer[];
};

export type SocialRaffleBlockRecord = {
  items: {
    id: Buffer;
    winner: Buffer;
    raffled: Buffer[];
  }[];
};

export type SocialRaffleAddressRecord = {
  height: number;
  collection: Buffer;
};

export type SocialRaffleCollectionChain = {
  activated: boolean;
  raffledCount: number;
};
