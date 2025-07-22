import React, { useMemo, useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Image } from 'antd';
import { queries } from 'api/queries';
import { getGamePoster } from 'utils/getGamePoster';
import { Wrapper, Floor, FloorTitle, FloorContent, Row, Room } from './Building4.styles';

interface BuildingProps {
  isRotate: boolean;
  onClick: (id: number) => void;
  setIsLoading: (data: boolean) => void;
}

// 운동장
const Building4 = ({ isRotate, onClick, setIsLoading }: BuildingProps) => {
  /** State */
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // 위치 목록 조회 API
  const {
    data: locationListQueryData = [],
    refetch: refetchLocationList,
    isSuccess: locationListQuerySuccess,
    isFetching: locationListFetching,
  } = useQuery({
    ...queries.location.list({
      parent_id: 4,
    }),
    staleTime: 500,
    cacheTime: 1000,
  });

  // 위치 목록 데이터 세팅
  const locationList = useMemo(() => {
    if (locationListQuerySuccess) {
      return locationListQueryData;
    }
  }, [locationListQueryData]);

  /** Effect */
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      if (locationListFetching) {
        setIsLoading(true);
      } else {
        setIsLoading(false);
      }
    }
  }, [isLoaded, locationListFetching]);

  return (
    <Wrapper>
      {/* 단상 앞편 */}
      <Floor rotate={isRotate.toString()}>
        <FloorTitle>단상 앞편</FloorTitle>
        <FloorContent height={'250px'} rotate={isRotate.toString()}>
          <Row>
            <Room width={'100%'} height={'250px'}>
              후프의 칼날
            </Room>
          </Row>
        </FloorContent>
      </Floor>

      {/* 끝편 */}
      <Floor rotate={isRotate.toString()}>
        <FloorTitle>끝편</FloorTitle>
        <FloorContent height={'250px'} rotate={isRotate.toString()}>
          <Row>
            <Room width={'100%'} height={'250px'}>
              어? 당겨지네
            </Room>
          </Row>
        </FloorContent>
      </Floor>
    </Wrapper>
  );
};

export default Building4;
