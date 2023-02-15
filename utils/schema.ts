export interface StateSchemaFromType<T extends Record<string, unknown>> {
  $id: string;
  type: "object";
  required: [keyof T];
  properties: Record<keyof T, unknown>;
  default?: T;
}

export interface AssetSchemaFromType<T extends Record<string, unknown>> {
  $id: string;
  title: string;
  type: "object";
  required: [keyof T];
  properties: Record<keyof T, unknown>;
}

export interface AccountSchemaFromType<T extends Record<string, unknown>> {
  type: "object";
  properties: Record<keyof T, unknown>;
  default: T;
}
