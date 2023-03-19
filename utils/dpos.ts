interface UnlockingAccountAsset {
  readonly delegateAddress: Buffer;
  readonly amount: bigint;
  readonly unvoteHeight: number;
}

export interface VoteAccountAsset {
  readonly delegateAddress: Buffer;
  amount: bigint;
}

export interface DPOSAccountProps {
  dpos: {
    delegate: {
      username: string;
      pomHeights: number[];
      consecutiveMissedBlocks: number;
      lastForgedHeight: number;
      isBanned: boolean;
      totalVotesReceived: bigint;
    };
    sentVotes: VoteAccountAsset[];
    unlocking: UnlockingAccountAsset[];
  };
}
