import { AddCommentProps } from "../../asset/comment/add_comment_asset";
import { CommentItemChain } from "../../chain/comment";
import { ReducerHandler } from "../../utils/reducerHandler";

export type GetCommentParam = {
  id: Buffer;
};

export type GetCommentsParam = {
  identifier: string;
  key: string;
};

export type AddCommentParam = {
  reducerHandler: ReducerHandler;
  payload: AddCommentPayload;
};

export type AddCommentPayload = Omit<CommentItemChain, "date"> &
  Omit<AddCommentProps, "id"> & { id: Buffer };
