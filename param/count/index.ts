export type GetCountParam = {
  module: string;
  address: Buffer;
};

export type GetCountItemParam = {
  module: string;
  key: string;
  address: Buffer;
};

export type AddCountParam = {
  module: string;
  key: string;
  address: Buffer;
  item: Buffer;
};
