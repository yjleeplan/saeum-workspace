import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Steps } from 'antd';
import { isEmpty, sortBy } from 'lodash';
import styled from 'styled-components';
import { queries } from 'api/queries';

const Wrapper = styled.div<{ $ismobile: string }>`
  display: flex;
  flex-direction: column;
  width: ${({ $ismobile }) => ($ismobile === 'true' ? '100%' : '70%')};
  margin: 0 auto;
  padding: 20px 20px;
  color: #fff;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`;

const Title = styled.div`
  font-size: 1.5rem;
  color: #fff;
  border-bottom: 1px solid #f0a721;
`;

const StepsWrapper = styled.div`
  color: #fff;
  margin-top: 20px;

  & .ant-steps-item-icon {
    width: fit-content;
  }

  & .ant-steps-item-content {
    > .ant-steps-item-title {
      color: #fff !important;
    }
    > .ant-steps-item-description {
      color: #fff !important;
    }
  }
`;

interface NehemRoadReserveByGameProps {
  isMobile: boolean;
  setIsLoading: (data: boolean) => void;
}

const NehemRoadReserveByGame = ({ isMobile, setIsLoading }: NehemRoadReserveByGameProps) => {
  /** Hook */
  const [searchParams, setSearchParams] = useSearchParams();

  /** State */
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // 게임 상세 정보 조회 API
  const {
    data: gameInfoQueryData,
    refetch: refetchGameInfo,
    isSuccess: gameInfoQuerySuccess,
    isFetching: gameInfoFetching,
  } = useQuery({
    ...queries.game.info({
      id: searchParams?.get('game') ?? 0,
    }),
    staleTime: 500,
    cacheTime: 1000,
    enabled: searchParams?.get('game') !== undefined,
  });

  // 게임 상세 정보 데이터 세팅
  const gameInfo = useMemo(() => {
    if (gameInfoQuerySuccess) {
      return gameInfoQueryData;
    }
  }, [gameInfoQueryData]);

  // 예약 목록 조회 API
  const {
    data: reserveListQueryData = [],
    refetch: refetchReserveList,
    isSuccess: reserveListQuerySuccess,
    isFetching: reserveListFetching,
  } = useQuery({
    ...queries.reserve.listByGame({
      game_id: searchParams?.get('game'),
    }),
    staleTime: 500,
    cacheTime: 1000,
  });

  // 예약 목록 데이터 세팅
  const reserveList = useMemo(() => {
    if (reserveListQuerySuccess) {
      return reserveListQueryData;
    } else {
      return [];
    }
  }, [reserveListQueryData]);

  /** Effect */
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      if (reserveListFetching) {
        setIsLoading(true);
      } else {
        setIsLoading(false);
      }
    }
  }, [isLoaded, reserveListFetching]);

  return (
    <Wrapper $ismobile={isMobile.toString()}>
      <TitleWrapper>
        <Title>{gameInfo?.name}</Title>
        <div>{gameInfo?.location_name_display}</div>
      </TitleWrapper>
      <StepsWrapper>
        {!isEmpty(reserveList) && (
          <Steps
            direction='vertical'
            current={0}
            items={reserveList.map((item) => {
              return {
                title: <div style={{ fontSize: '22px' }}>{item.user_name}</div>,
                description: <div style={{ height: '10px' }}></div>,
                icon: <div style={{ color: '#f0a721' }}>{item.game_start_time}</div>,
              };
            })}
          />
        )}
      </StepsWrapper>
    </Wrapper>
  );
};

export default NehemRoadReserveByGame;
