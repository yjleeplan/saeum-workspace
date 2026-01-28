import { useMemo, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { message } from 'antd';
import { sortBy } from 'lodash';
import { useAuthStore } from 'store';
import { NEHEMROAD_ADMIN_TOKEN } from 'context/Context';
import { queries } from 'api/queries';
import { Wrapper, TitleWrapper, Title, Content, Row, Col, GameTimeBox } from './Admin.styles';

interface NehemRoadAdminProps {
  isMobile: boolean;
}

const NehemRoadAdmin = () => {
  const { isMobile }: NehemRoadAdminProps = useOutletContext();
  const token = useAuthStore?.getState()?.userInfo?.token;

  // 클립보드에 복사
  const copyToClipboard = async (gameName: string, gameLocation: string, startTime: string, count: number) => {
    try {
      await navigator.clipboard.writeText(
        `🚨[${count}자리] 남았습니다!!🚨\n\n🧱 게임 : ${gameName}\n🧱 장소 : ${gameLocation}\n🧱 시간 : ${startTime}\n\n🗣️ “Come, let us build the wall of jerusalem”`,
      );
      message.success('클립보드에 복사되었습니다.');
    } catch (error: any) {
      message.error('클립보드 복사 실패:', error);
    }
  };

  // 게임타임 목록 조회 API
  const {
    data: gameListQueryData = [],
    refetch: refetchGameList,
    isSuccess: gameListQuerySuccess,
    isFetching: gameListFetching,
  } = useQuery({
    ...queries.game.timeList(),
    staleTime: 500,
    cacheTime: 1000,
  });

  // 게임타임 목록 데이터 세팅
  const gameList = useMemo(() => {
    if (gameListQuerySuccess) {
      return gameListQueryData;
    }
  }, [gameListQueryData]);

  /** Effect */
  useEffect(() => {
    // 관리자 토큰인지 체크
    if (token !== NEHEMROAD_ADMIN_TOKEN) {
      window.location.href = '/nehem-road/home';
    }
  }, []);

  return (
    <Wrapper $ismobile={isMobile.toString()}>
      <TitleWrapper>
        <Title>Admin</Title>
      </TitleWrapper>
      <Content>
        {gameList?.map((item, index) => (
          <Row key={index}>
            <Col width='260px' $color='#fff' $align='start' $fw='bold'>
              {item.name}
            </Col>
            <Col width='220px' $color='#808080' $align='start' $font='14px' $fw='bold'>
              {item.location_name_display}
            </Col>
            <Col width='1000px' $align='start' $flow='wrap' $padding='0' $mb='0'>
              {sortBy(item.time_list, ['game_date', 'game_start_time'])?.map((time, timeIndex) => (
                <Col width='100px' key={timeIndex}>
                  <GameTimeBox
                    $enable={time.is_possible}
                    onClick={() =>
                      time.is_possible &&
                      copyToClipboard(
                        item.name,
                        item.location_name_display,
                        time.game_start_time,
                        item.people_max / 10 - time.reserve_count,
                      )
                    }
                  >
                    <Row>
                      <Col width='100%' $fw='bold'>
                        {time.game_start_time}
                      </Col>
                    </Row>
                    <Row>
                      <Col width='100%' $font='14px'>
                        {`${time.reserve_count}/${item.people_max / 10}`}
                      </Col>
                    </Row>
                  </GameTimeBox>
                </Col>
              ))}
            </Col>
          </Row>
        ))}
      </Content>
    </Wrapper>
  );
};

export default NehemRoadAdmin;
