import { ActivityService } from "../../service/activity";

export type NFTActivityName =
  | "mint"
  | "raffled"
  | "redeem"
  | "secretDelivered"
  | "videoCallAnswered"
  | "videoCallRejected"
  | "momentCreated";

export type NFTActivity = Omit<ActivityService, "name"> & {
  name: NFTActivityName;
};

export type NFTActivityAsset = Buffer;
