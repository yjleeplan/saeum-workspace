import { useQuery } from '@tanstack/react-query';
import { useState, useMemo, useRef } from 'react';
import { queries } from 'api/queries';
import PrayerAltarImage from './PrayerAltarImage';
import { Avatar, Comment, List, Skeleton } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { CommentData, CommentOptions } from 'types';
import { UserOutlined } from '@ant-design/icons';
import moment from 'moment';
import { PRAYER_ALTAR } from './config/config';
import _ from 'lodash';

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
  const [prayerAltars, setPrayerAltars] = useState(PRAYER_ALTAR);

  // 마을별 출석 카운트 조회 API
  const {
    data: departmentCountListQueryData,
    refetch: refetchDepartmentCountList,
    isSuccess: departmentCountListQuerSuccess,
    isFetching: departmentCountListFetching,
  } = useQuery({
    ...queries.department.countList({}),
    staleTime: 500,
    cacheTime: 1000,
  });

  // 마을별 출석 카운트 데이터 세팅
  useMemo(() => {
    if (departmentCountListQuerSuccess) {
      let newData = PRAYER_ALTAR;

      // 마을별 평균값을 구하여 newData에 저장
      _.forEach(departmentCountListQueryData, (item, key) => {
        if (item?.department_name === '소담마을') {
          newData[0].percent = parseFloat(
            Number((item?.total_attendance_count * 100) / item?.max_attendance_count).toFixed(2),
          );
        } else if (item?.department_name === '도담마을') {
          newData[1].percent = parseFloat(
            Number((item?.total_attendance_count * 100) / item?.max_attendance_count).toFixed(2),
          );
        } else if (item?.department_name === '어울림마을') {
          newData[2].percent = parseFloat(
            Number((item?.total_attendance_count * 100) / item?.max_attendance_count).toFixed(2),
          );
        } else if (item?.department_name === '울림마을') {
          newData[3].percent = parseFloat(
            Number((item?.total_attendance_count * 100) / item?.max_attendance_count).toFixed(2),
          );
        } else if (item?.department_name === '이음마을') {
          newData[4].percent = parseFloat(
            Number((item?.total_attendance_count * 100) / item?.max_attendance_count).toFixed(2),
          );
        } else if (item?.department_name === '세붐마을') {
          newData[5].percent = parseFloat(
            Number((item?.total_attendance_count * 100) / item?.max_attendance_count).toFixed(2),
          );
        } else if (item?.department_name === '새움청년부') {
          newData[6].percent = parseFloat(
            Number((item?.total_attendance_count * 100) / item?.max_attendance_count).toFixed(2),
          );
        } else if (item?.department_name === '주일학교') {
          newData[7].percent = parseFloat(
            Number((item?.total_attendance_count * 100) / item?.max_attendance_count).toFixed(2),
          );
        }
      });

      setPrayerAltars(newData);
    }
  }, [departmentCountListQueryData]);

  // 댓글 목록 조회 API
  const {
    data: commentListQueryData = { items: [], total: 0 },
    refetch: refetchCommentList,
    isSuccess: commentListQuerSuccess,
    isFetching: commentListFetching,
  } = useQuery({
    ...queries.comment.list({
      type: 2,
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
      setCommentData((prev) => ({
        ...prev,
        comments: commentOptions.offset === 0 ? newData : [...prev.comments, ...newData],
        totalCount: commentListQueryData?.total,
      }));
    }
  }, [commentListQueryData]);

  // 댓글 스크롤
  const handleScroll = async () => {
    setCommentOptions((prev) => ({
      ...prev,
      offset: prev.offset + prev.limit,
    }));
  };

  return (
    <>
      <div className='prayer-altar-wrap'>
        <div className='prayer-altar-title' />
        <div className='prayer-altar-content'>
          <PrayerAltarImage laneNo={1} percent={prayerAltars[0]?.percent} />
          <PrayerAltarImage laneNo={2} percent={prayerAltars[1]?.percent} />
          <PrayerAltarImage laneNo={3} percent={prayerAltars[2]?.percent} />
          <PrayerAltarImage laneNo={4} percent={prayerAltars[3]?.percent} />
          <PrayerAltarImage laneNo={5} percent={prayerAltars[4]?.percent} />
          <PrayerAltarImage laneNo={6} percent={prayerAltars[5]?.percent} />
          <PrayerAltarImage laneNo={7} percent={prayerAltars[6]?.percent} />
          <PrayerAltarImage laneNo={8} percent={prayerAltars[7]?.percent} />
        </div>
      </div>
      <div className='chat-wrap'>
        <div className='chat-title-wrap'>
          <div className='chat-title' />
        </div>
        <div className='chat-content'>
          <div id='chat-infinite-scroll' ref={commentListRef}>
            <InfiniteScroll
              scrollableTarget='chat-infinite-scroll'
              dataLength={commentData?.comments?.length}
              next={handleScroll}
              scrollThreshold={'1px'}
              hasMore={commentData?.comments?.length < commentData?.totalCount}
              loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
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
