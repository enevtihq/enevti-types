import { AssetSchemaFromType } from "./schema";

export type ModuleInfo<T extends string = string> = {
  id: number;
  asset: Record<T, { id: number; schema: AssetSchemaFromType<any> }>;
};
