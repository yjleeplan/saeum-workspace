import { EditOutlined, UserOutlined } from '@ant-design/icons';
import { useQuery } from '@tanstack/react-query';
import { Avatar, Button, Card, Comment, Input, List, message, Skeleton } from 'antd';
import { map, random } from 'lodash';
import moment from 'moment';
import React, { useEffect, useRef, useState, useMemo } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { queries } from 'api/queries';
import { usePostComment } from 'api/useCommentApi';
import { CommentData, CommentOptions, PostCommentRequest } from 'types';

interface CommentsProps {
  title: string;
  setIsLoading: (data: boolean) => void;
}

const Comments = ({ title, setIsLoading }: CommentsProps) => {
  const colorCodeList = [
    '#08080',
    '#ADD8E6',
    '#90EE90',
    '#87d068',
    'f56a00',
    '#2db7f5',
    '#108ee9',
    '#FFD700',
    '#cd201f',
    '#FA8072',
    '#EE82EE',
    '#8A2BE2',
  ];

  /** Hook */
  const commentListRef = useRef<HTMLDivElement>(null);

  /** State */
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [commentUserName, setCommentUserName] = useState<string>('');
  const [commentContent, setCommentContent] = useState<string>('');
  const [commentData, setCommentData] = useState<CommentData>({
    totalCount: 0,
    comments: [],
  });
  const [commentOptions, setCommentOptions] = useState<CommentOptions>({
    offset: 0,
    limit: 10,
  });

  // 댓글 목록 조회 API
  const {
    data: commentListQueryData = { items: [], total: 0 },
    refetch: refetchCommentList,
    isSuccess: commentListQuerSuccess,
    isFetching: commentListFetching,
  } = useQuery({
    ...queries.comment.list({
      offset: commentOptions.offset,
      limit: commentOptions.limit,
    }),
    staleTime: 500,
    cacheTime: 1000,
  });

  // 댓글 목록 데이터 세팅
  useMemo(() => {
    if (commentListQuerSuccess) {
      const queryData = [...commentListQueryData.items];
      const newData = map(queryData, (item) => {
        return {
          author: item.user_name,
          avatar: (
            <Avatar
              icon={<UserOutlined />}
              style={{
                backgroundColor: colorCodeList[random(0, colorCodeList.length)],
              }}
            />
          ),
          content: <p>{item.content}</p>,
          datetime: moment(item.created_at).format('YYYY-MM-DD HH:mm:ss'),
        };
      });
      setCommentData({
        ...commentData,
        comments: [...((commentOptions?.offset && commentData?.comments) || []), ...newData],
        totalCount: commentListQueryData?.total,
      });
    }
  }, [commentListQueryData]);

  // 댓글 스크롤
  const handleScroll = async () => {
    setCommentOptions((prev) => ({
      ...prev,
      offset: commentOptions.offset + commentOptions.limit,
    }));
  };

  // 댓글 등록 API
  const { mutate: postComment } = usePostComment();
  const handlePostComment = async (payload: PostCommentRequest) => {
    setIsLoading(true);

    postComment(payload, {
      onSuccess: () => {
        if (commentListRef.current) {
          commentListRef.current.scrollTop = 0;
        }

        refetchCommentList();
        setCommentUserName('');
        setCommentContent('');
        setCommentOptions((prev) => ({
          ...prev,
          offset: 0,
        }));
      },
      onError: (error: any) => {
        // 공통 처리
      },
      onSettled(data, error, variables, context) {
        setIsLoading(false);
      },
    });
  };

  // 댓글 등록
  const handleSubmit = async () => {
    if (!commentUserName) {
      message.warning('이름을 입력해주세요.', 1.2);
      return;
    }
    if (!commentContent) {
      message.warning('댓글을 입력해주세요.', 1.2);
      return;
    }

    handlePostComment({ user_name: commentUserName, content: commentContent });
  };

  // 댓글 사용자 이름 Change
  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentUserName(e.target.value);
  };

  // 댓글 내용 Change
  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentContent(e.target.value);
  };

  /** Effect */
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      if (commentListFetching) {
        setIsLoading(true);
      } else {
        setIsLoading(false);
      }
    }
  }, [isLoaded, commentListFetching]);

  return (
    <div className='comment-wrap'>
      <Card className='comment-add-wrap' bordered={false} title={title}>
        <Comment
          content={
            <>
              <Input
                className='comment-user-name'
                onChange={handleUserNameChange}
                value={commentUserName}
                placeholder='이름을 입력해주세요'
                size='large'
              />
              <Input.TextArea
                className='comment-content'
                rows={4}
                onChange={handleCommentChange}
                value={commentContent}
                placeholder='댓글을 입력해주세요'
              />
              <Button className='comment-btn' loading={false} onClick={handleSubmit} type='primary'>
                <EditOutlined />
                댓글 등록
              </Button>
            </>
          }
        />
      </Card>
      <Card className='comment-list-wrap' bordered={false} title={`${commentData?.totalCount} 댓글`}>
        <div id='infinite-scroll-comment' ref={commentListRef}>
          <InfiniteScroll
            dataLength={commentData?.comments?.length}
            next={handleScroll}
            hasMore={commentData?.comments?.length < commentData?.totalCount}
            loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
            scrollableTarget='infinite-scroll-comment'
            scrollThreshold={'1px'}
          >
            <List
              dataSource={commentData?.comments}
              itemLayout='horizontal'
              renderItem={(props) => <Comment {...props} />}
            />
          </InfiniteScroll>
        </div>
      </Card>
    </div>
  );
};

export default Comments;
