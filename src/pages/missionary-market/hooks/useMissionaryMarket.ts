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
      return rankListQueryData;
    } else {
      return { list1: [], list2: [], list3: [] };
    }
  }, [rankListQueryData]);

  /** Effect */
  useEffect(() => {
    refetchRankList();
    setInterval(() => refetchRankList(), 10000);
  }, []);

  return {
    rankList,
  };
};
