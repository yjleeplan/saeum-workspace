import { useState, useEffect } from 'react';

export const useMissionaryMarket = () => {
  /** State */
  const [resultData, setResultData] = useState({ list1: [], list2: [], list3: [] });

  /** Effect */
  useEffect(() => {
    // handleGetRankList();
    // setInterval(() => handleGetRankList(), 10000);
    // eslint-disable-next-line
  }, []);

  // 랭킹 조회
  const handleGetRankList = async () => {
    // try {
    //   const { data } = await api.listRank({});
    //   setResultData(data);
    // } catch (error) {
    //   message.error(error.response ? `${error.response.data.code}, ${error.response.data.message}` : '랭킹 조회 실패');
    // } finally {
    // }
  };

  return {
    resultData,
    handleGetRankList,
  };
};
