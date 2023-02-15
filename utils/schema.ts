export interface ArraySchema<T> {
  type: "array";
  fieldNumber: number;
  items: T;
}

export interface BaseSchemaFromType<
  T extends Record<string, unknown>,
  S = Record<keyof T, unknown>
> {
  type: string;
  required: (keyof T)[];
  properties: Record<keyof T, unknown> & S;
}

export interface StateSchemaFromType<
  T extends Record<string, unknown>,
  S = Record<keyof T, unknown>
> extends BaseSchemaFromType<T, S> {
  $id: string;
  default?: T;
}

export interface AssetSchemaFromType<
  T extends Record<string, unknown>,
  S = Record<keyof T, unknown>
> extends BaseSchemaFromType<T, S> {
  $id: string;
  title: string;
}

export interface AccountSchemaFromType<
  T extends Record<string, unknown>,
  S = Record<keyof T, unknown>
> extends Omit<BaseSchemaFromType<T, S>, "required"> {
  default: T;
}
