import {
  AddCommentParam,
  AddCommentPayload,
  GetCommentParam,
  GetCommentsParam,
  NewCommentEvent,
} from "../comment";

export type NewExclusiveCommentEvent = NewCommentEvent;

export type NewExclusiveReplyEvent = NewCommentEvent;

export type GetExclusiveCommentParam = GetCommentParam;

export type GetExclusiveReplyParam = GetCommentParam;

export type GetExclusiveCommentsParam = GetCommentsParam;

export type GetExclusiveRepliesParam = GetCommentsParam;

export type AddExclusiveCommentParam = AddCommentParam;

export type AddExclusiveReplyParam = AddCommentParam;

export type AddExclusiveCommentPayload = AddCommentPayload;

export type AddExclusiveReplyPayload = AddCommentPayload;
