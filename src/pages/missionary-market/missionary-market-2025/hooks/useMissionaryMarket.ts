import { useQuery } from '@tanstack/react-query';
import { useEffect, useMemo } from 'react';
import { queries } from 'api/queries';

export const useMissionaryMarket = () => {
  // 랭킹 조회 API
  const {
    data: rankListQueryData,
    refetch: refetchRankList,
    isSuccess: rankListQuerSuccess,
    isFetching: rankListFetching,
  } = useQuery({
    ...queries.rank.list(),
    staleTime: 500,
    cacheTime: 1000,
  });

  // 랭킹 데이터 세팅
  const rankList = useMemo(() => {
    if (rankListQuerSuccess) {
      // return rankListQueryData;
      return {
        list1: [
          {
            type: 1,
            name: '김민주',
            age: 14,
            point: 1000,
            updated_at: '2023-05-13T07:10:19.000Z',
            created_at: '2023-05-13T05:31:47.000Z',
          },
          {
            type: 1,
            name: '최수정',
            age: 33,
            point: 300,
            updated_at: '2023-05-13T05:31:47.000Z',
            created_at: '2023-05-13T05:31:47.000Z',
          },
        ],
        list2: [
          {
            type: 2,
            name: '이정익',
            age: 28,
            point: 900,
            updated_at: '2023-05-13T05:31:47.000Z',
            created_at: '2023-05-13T05:31:47.000Z',
          },
          {
            type: 2,
            name: '이태우',
            age: 19,
            point: 500,
            updated_at: '2023-05-13T05:31:47.000Z',
            created_at: '2023-05-13T05:31:47.000Z',
          },
        ],
        list3: [
          {
            type: 2,
            name: '이정익',
            age: 28,
            point: 900,
            updated_at: '2023-05-13T05:31:47.000Z',
            created_at: '2023-05-13T05:31:47.000Z',
          },
          {
            type: 2,
            name: '이태우',
            age: 19,
            point: 500,
            updated_at: '2023-05-13T05:31:47.000Z',
            created_at: '2023-05-13T05:31:47.000Z',
          },
        ],
      };
    } else {
      return { list1: [], list2: [], list3: [] };
    }
  }, [rankListQueryData]);

  /** Effect */
  useEffect(() => {
    // refetchRankList();
    // setInterval(() => refetchRankList(), 10000);
  }, []);

  return {
    rankList,
  };
};
