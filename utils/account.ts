export declare type AccountDefaultProps = {
  [name: string]:
    | {
        [key: string]: unknown;
      }
    | undefined
    | Buffer;
};

export declare type Account<T = AccountDefaultProps> = T & {
  address: Buffer;
};
