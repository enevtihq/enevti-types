import { AddCommentProps } from "../../../asset/engagement/add_comment_asset";
import { CommentItemChain } from "../../../chain/engagement";
import { ReducerHandler } from "../../../utils/reducerHandler";

export type NewCommentEvent = {
  id: Buffer;
};

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

export type NewExclusiveCommentEvent = NewCommentEvent;

export type NewExclusiveReplyEvent = NewCommentEvent;

export type GetExclusiveCommentParam = GetCommentParam;

export type GetExclusiveReplyParam = GetCommentParam;

export type GetExclusiveCommentsParam = GetCommentsParam;

export type GetExclusiveRepliesParam = GetCommentParam;

export type AddExclusiveCommentParam = AddCommentParam;

export type AddExclusiveReplyParam = AddCommentParam;

export type AddExclusiveCommentPayload = AddCommentPayload;

export type AddExclusiveReplyPayload = Omit<AddCommentPayload, "identifier">;
