export interface Comment {
  id: string;
  user_name: string;
  content: string;
  is_delete: string;
  project_id: string;
  updated_at: string;
  created_at: string;
}

export type GetCommentListRequest = {
  offset: number;
  limit: number;
};

export type GetCommentListResponse = {
  items: Comment[];
  total: number;
};

export type PostCommentRequest = {
  user_name: string;
  content: string;
};

export type CommentData = {
  totalCount: number;
  comments: {
    author?: React.ReactNode;
    avatar?: React.ReactNode;
    content: React.ReactNode;
    datetime?: React.ReactNode;
  }[];
};

export type CommentOptions = {
  offset: number;
  limit: number;
};
