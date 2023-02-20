export type ModuleInfo = {
  id: number;
  asset: Record<string, { id: number; schema: Record<string, any> }>;
};
