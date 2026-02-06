import { useQuery } from '@tanstack/react-query';
import { Image, Progress } from 'antd';
import _ from 'lodash';
import React, { useState, useMemo } from 'react';
import title from 'assets/images/dawn-worship-20th/title.png';
import Player from 'components/Player';
import { queries } from 'api/queries';
import { PLAYERS } from './config/config';

// #rank-layout width -> document.getElementById("rank-layout").offsetWidth
// body width -> document.body.offsetWidth

interface RunningRaceMobileProps {
  setIsLoading?: (data: boolean) => void;
}

const RunningRaceMobile = ({ setIsLoading }: RunningRaceMobileProps) => {
  /** State */
  const [players, setPlayers] = useState(PLAYERS);

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
      let newData = PLAYERS;

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
        } else if (item?.department_name === '에하드') {
          newData[5].percent = parseFloat(
            Number((item?.total_attendance_count * 100) / item?.max_attendance_count).toFixed(2),
          );
        } else if (item?.department_name === '세붐마을') {
          newData[6].percent = parseFloat(
            Number((item?.total_attendance_count * 100) / item?.max_attendance_count).toFixed(2),
          );
        } else if (item?.department_name === '새움청년부') {
          newData[7].percent = parseFloat(
            Number((item?.total_attendance_count * 100) / item?.max_attendance_count).toFixed(2),
          );
        } else if (item?.department_name === '주일학교') {
          newData[8].percent = parseFloat(
            Number((item?.total_attendance_count * 100) / item?.max_attendance_count).toFixed(2),
          );
        }
      });

      // 평균값을 기준으로 정렬
      let orderByPercentList = _.orderBy(newData, 'percent', 'desc');

      orderByPercentList[0].status = 'glad';
      orderByPercentList[1].status = 'glad';
      orderByPercentList[7].status = 'sad';
      orderByPercentList[8].status = 'sad';

      setPlayers(orderByPercentList);
    }
  }, [departmentCountListQueryData]);

  // Player width size
  const playerWidth = Number((document.body.offsetWidth * 18) / 100).toFixed(2);

  return (
    <>
      <div className='running-race-mobile-title'>
        <Image width={300} height={160} src={title} preview={false} />
      </div>
      <div className='running-race-mobile-content'>
        {_.map(players, (item, index) => {
          return (
            <div className='player-wrap'>
              <div className='player'>
                <Player laneNo={item?.lane} playerWidth={playerWidth} playerStatus={item?.status} />
              </div>
              <div className='player-progress-wrap'>
                <Progress
                  strokeColor={{
                    '0%': item?.color,
                    '100%': item?.color,
                  }}
                  status='active'
                  percent={item?.percent > 100 ? 100 : item?.percent}
                />
                <div className='player-percent'>{item?.percent > 100 ? 100 : item?.percent}%</div>
                <div className='rank-number'>#{index + 1}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RunningRaceMobile;
