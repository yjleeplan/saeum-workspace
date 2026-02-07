import { useQuery } from '@tanstack/react-query';
import { Modal } from 'antd';
import confetti from 'canvas-confetti';
import _ from 'lodash';
import React, { useEffect, useState, useMemo } from 'react';
import { queries } from 'api/queries';
import Player from 'components/Player';
import { PLAYERS } from './config/config';

// #running-race-layout width -> document.getElementById("running-race-layout").offsetWidth
// body width -> document.body.offsetWidth

interface RunningRaceProps {
  isMobile?: () => boolean;
}

const RunningRace = ({
  isMobile = () => {
    return false;
  },
}: RunningRaceProps) => {
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
      const orderByPercentList = _.orderBy(newData, 'percent', 'desc');

      _.forEach(newData, (item, key) => {
        // 1~2등의 status 변경
        if (item?.lane === orderByPercentList[0].lane || item?.lane === orderByPercentList[1].lane) {
          item.status = 'glad';
        }

        // 8~9등의 status 변경
        if (item?.lane === orderByPercentList[7].lane || item?.lane === orderByPercentList[8].lane) {
          item.status = 'sad';
        }
      });

      setPlayers(newData);
    }
  }, [departmentCountListQueryData]);

  // Player width size
  const playerWidth = Number((document.body.offsetWidth * 7) / 100).toFixed(2);

  // Lane top size
  const laneTop = (index: number) => {
    return 18.2 + 7.6 * index;
  };

  // Lane padding left size
  const lanePaddingLeft = (index: number) => {
    return 4.3 + 1.1 * index;
  };

  // Lane padding right size
  const lanePaddingRight = (index: number) => {
    return 13.1 - 1.1 * index;
  };

  // Player의 이동거리 추출
  const getPlayerStep = (index: number) => {
    const lanePaddingLeftPx = (document.body.offsetWidth * lanePaddingLeft(0)) / 100;
    const lanePaddingRightPx = (document.body.offsetWidth * lanePaddingRight(0)) / 100;
    const step = Number(
      (document.body.offsetWidth - lanePaddingLeftPx - lanePaddingRightPx - parseFloat(playerWidth)) / 100,
    ).toFixed(3);
    const percent =
      parseFloat(Number(players[index].percent).toFixed(2)) > 100
        ? 100
        : parseFloat(Number(players[index].percent).toFixed(2));

    return Number(step) * percent;
  };

  // 시뮬레이션 (테스트용)
  // const simulate = () => {
  //   setPlayers((prev) => ({
  //     lane1: prev.lane1 + 2,
  //     lane2: prev.lane2 + 10,
  //     lane3: prev.lane3 + 9,
  //     lane4: prev.lane4 + 7,
  //     lane5: prev.lane5 + 1,
  //     lane6: prev.lane6 + 12,
  //     lane7: prev.lane7 + 8,
  //     lane8: prev.lane8 + 3,
  //     lane9: prev.lane9 + 6,
  //   }));
  // };

  // 위쪽 폭죽 에니메이션 헨들러
  const handleConfetti1 = () => {
    const duration = 6 * 1000; // 6초
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        // 시간 다 끝나면 폭죽 제거
        return clearInterval(interval);
      }

      confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { x: 0.2, y: 0.2 },
      });
      confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { x: 0.8, y: 0.2 },
      });
    }, 1000);
  };

  // 양쪽 폭죽 에니메이션 헨들러
  const handleConfetti2 = () => {
    const duration = 5 * 1000; // 5초
    const animationEnd = Date.now() + duration;
    const colors = ['#bb0000', '#ffffff'];

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        // 시간 다 끝나면 폭죽 제거
        return clearInterval(interval);
      }

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 130,
        origin: { x: 0, y: 0.3 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 130,
        origin: { x: 1, y: 0.3 },
        colors: colors,
      });
    }, 10);
  };

  /** Effect */
  useEffect(() => {
    if (isMobile()) {
      refetchDepartmentCountList();
    } else {
      const infoMessage = () => {
        let secondsToGo = 5;
        const modal = Modal.warning({
          width: 500,
          title: (
            <>
              <p style={{ marginBottom: 0 }}>테블릿에서는 '가로모드'로</p>
              <p style={{ marginBottom: '10px' }}>PC에서는 키보드 'F11'을 누르시면 </p>
              <p style={{ marginBottom: '20px' }}>더 정확하게 보실 수 있습니다.</p>
            </>
          ),
          content: `(${secondsToGo}초 후 창이 자동으로 닫힙니다.)`,
        });
        const timer = setInterval(() => {
          secondsToGo -= 1;
          modal.update({
            content: `(${secondsToGo}초 후 창이 자동으로 닫힙니다.)`,
          });
        }, 1000);
        setTimeout(() => {
          clearInterval(timer);
          modal.destroy();
        }, secondsToGo * 1000);
      };
      infoMessage();

      // simulate();
      // setInterval(() => simulate(), 2000);

      refetchDepartmentCountList();
      handleConfetti1();

      setInterval(() => handleConfetti1(), 13000);
      setInterval(() => handleConfetti2(), 30000);
      setInterval(() => refetchDepartmentCountList(), 60000);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className='lane' style={{ top: `${laneTop(0)}%`, paddingLeft: `${lanePaddingLeft(0)}%` }}>
        <div className='player' style={{ marginLeft: `${getPlayerStep(0)}px` }}>
          <Player laneNo={1} playerWidth={playerWidth} playerStatus={players[0].status} />
        </div>
      </div>
      <div className='lane' style={{ top: `${laneTop(1)}%`, paddingLeft: `${lanePaddingLeft(1)}%` }}>
        <div className='player' style={{ marginLeft: `${getPlayerStep(1)}px` }}>
          <Player laneNo={2} playerWidth={playerWidth} playerStatus={players[1].status} />
        </div>
      </div>
      <div className='lane' style={{ top: `${laneTop(2)}%`, paddingLeft: `${lanePaddingLeft(2)}%` }}>
        <div className='player' style={{ marginLeft: `${getPlayerStep(2)}px` }}>
          <Player laneNo={3} playerWidth={playerWidth} playerStatus={players[2].status} />
        </div>
      </div>
      <div className='lane' style={{ top: `${laneTop(3)}%`, paddingLeft: `${lanePaddingLeft(3)}%` }}>
        <div className='player' style={{ marginLeft: `${getPlayerStep(3)}px` }}>
          <Player laneNo={4} playerWidth={playerWidth} playerStatus={players[3].status} />
        </div>
      </div>
      <div className='lane' style={{ top: `${laneTop(4)}%`, paddingLeft: `${lanePaddingLeft(4)}%` }}>
        <div className='player' style={{ marginLeft: `${getPlayerStep(4)}px` }}>
          <Player laneNo={5} playerWidth={playerWidth} playerStatus={players[4].status} />
        </div>
      </div>
      <div className='lane' style={{ top: `${laneTop(5)}%`, paddingLeft: `${lanePaddingLeft(5)}%` }}>
        <div className='player' style={{ marginLeft: `${getPlayerStep(5)}px` }}>
          <Player laneNo={6} playerWidth={playerWidth} playerStatus={players[5].status} />
        </div>
      </div>
      <div className='lane' style={{ top: `${laneTop(6)}%`, paddingLeft: `${lanePaddingLeft(6)}%` }}>
        <div className='player' style={{ marginLeft: `${getPlayerStep(6)}px` }}>
          <Player laneNo={7} playerWidth={playerWidth} playerStatus={players[6].status} />
        </div>
      </div>
      <div className='lane' style={{ top: `${laneTop(7)}%`, paddingLeft: `${lanePaddingLeft(7)}%` }}>
        <div className='player' style={{ marginLeft: `${getPlayerStep(7)}px` }}>
          <Player laneNo={8} playerWidth={playerWidth} playerStatus={players[7].status} />
        </div>
      </div>
      <div className='lane' style={{ top: `${laneTop(8)}%`, paddingLeft: `${lanePaddingLeft(8)}%` }}>
        <div className='player' style={{ marginLeft: `${getPlayerStep(8)}px` }}>
          <Player laneNo={9} playerWidth={playerWidth} playerStatus={players[8].status} />
        </div>
      </div>
    </>
  );
};

export default RunningRace;
