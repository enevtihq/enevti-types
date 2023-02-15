export type RegistrarAsset = {
  id: Buffer;
};

export type BlockRegisrarAsset = {
  items: {
    name: string;
    payload: string;
  }[];
};
