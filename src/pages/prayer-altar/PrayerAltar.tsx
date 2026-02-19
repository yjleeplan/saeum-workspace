import { useQuery } from '@tanstack/react-query';
import { useState, useMemo, useRef } from 'react';
import { queries } from 'api/queries';
import PrayerAltarImage from './PrayerAltarImage';
import { Avatar, Comment, List, Skeleton } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { CommentData, CommentOptions } from 'types';
import { UserOutlined } from '@ant-design/icons';
import moment from 'moment';

const PrayerAltar = () => {
  /** Hook */
  const commentListRef = useRef<HTMLDivElement>(null);

  /** State */
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
      const newData = queryData?.map((item) => {
        return {
          author: item.user_name,
          avatar: (
            <Avatar
              icon={<UserOutlined />}
              // style={{
              //   backgroundColor: colorCodeList[random(0, colorCodeList.length)],
              // }}
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

  return (
    <>
      <div className='prayer-altar-wrap'>
        <div className='prayer-altar-title' />
        <div className='prayer-altar-content'>
          <PrayerAltarImage laneNo={1} prayerStatus={'base'} />
          <PrayerAltarImage laneNo={2} prayerStatus={'base'} />
          <PrayerAltarImage laneNo={3} prayerStatus={'base'} />
          <PrayerAltarImage laneNo={4} prayerStatus={'base'} />
          <PrayerAltarImage laneNo={5} prayerStatus={'base'} />
          <PrayerAltarImage laneNo={6} prayerStatus={'base'} />
          <PrayerAltarImage laneNo={7} prayerStatus={'base'} />
          <PrayerAltarImage laneNo={8} prayerStatus={'base'} />
        </div>
      </div>
      <div className='chat-wrap'>
        <div className='chat-title-wrap'>
          <div className='chat-title' />
        </div>
        <div className='chat-content'>
          <div id='chat-infinite-scroll' ref={commentListRef}>
            <InfiniteScroll
              dataLength={commentData?.comments?.length}
              next={handleScroll}
              hasMore={commentData?.comments?.length < commentData?.totalCount}
              loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
              scrollableTarget='infinite-scroll-comment'
            >
              <List
                dataSource={commentData?.comments}
                itemLayout='horizontal'
                renderItem={(props) => <Comment {...props} />}
              />
            </InfiniteScroll>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrayerAltar;
