export type NewRegistrarEvent = {
  payload: string;
};

export type GetRegistrarParam = {
  identifier: string;
  value: string;
};

export type GetBlockRegistrarParam = {
  height: number;
};

export type SetRegistrarParam = {
  identifier: string;
  value: string;
  id: Buffer;
};
