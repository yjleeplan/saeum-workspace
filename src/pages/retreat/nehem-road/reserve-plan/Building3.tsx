import React, { useMemo, useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Image } from 'antd';
import { queries } from 'api/queries';
import { getGamePoster } from 'utils/getGamePoster';
import {
  Wrapper,
  Floor,
  FloorTitle,
  FloorContent,
  Row,
  Col,
  Room,
  RoomDisabled,
  Stair,
  ToiletMen,
  ToiletWomen,
} from './Building3.styles';

interface BuildingProps {
  isRotate: boolean;
  onClick: (id: number) => void;
  setIsLoading: (data: boolean) => void;
}

// 미스바 성전(본관)
const Building3 = ({ isRotate, onClick, setIsLoading }: BuildingProps) => {
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
      parent_id: 3,
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
      {/* 2층 */}
      <Floor rotate={isRotate.toString()}>
        <FloorTitle>2층</FloorTitle>
        <FloorContent height={'250px'} rotate={isRotate.toString()}>
          <Row>
            <Room width={'100%'} height={'250px'} scale={1.02} onClick={() => onClick(1)}>
              <Image width={'100%'} height={'100%'} src={getGamePoster(1)} preview={false} />
            </Room>
          </Row>
        </FloorContent>
      </Floor>

      {/* 1층 */}
      <Floor rotate={isRotate.toString()}>
        <FloorTitle>1층</FloorTitle>
        <FloorContent height={'250px'} rotate={isRotate.toString()}>
          <Row>
            <Col width={'10%'}>
              <RoomDisabled width={'100%'} height={'200px'}>
                현관
              </RoomDisabled>
            </Col>
            <Col width={'80%'}>
              <Row>
                <Room width={'24%'} height={'80px'}>
                  장인의 손길
                </Room>
                <Room width={'24%'} height={'80px'} onClick={() => onClick(10)}>
                  <Image width={'100%'} height={'100%'} src={getGamePoster(10)} preview={false} />
                </Room>
                <RoomDisabled width={'24%'} height={'80px'}>
                  103
                </RoomDisabled>
                <RoomDisabled width={'24%'} height={'80px'}>
                  104
                </RoomDisabled>
                <RoomDisabled width={'4%'} height={'80px'}></RoomDisabled>
              </Row>
              <Row>
                <Room width={'100%'} height={'170px'}>
                  장인의 손길
                </Room>
              </Row>
            </Col>
            <Col width={'10%'}>
              <RoomDisabled width={'100%'} height={'80px'}></RoomDisabled>
              <Stair width={'100%'} height={'16px'} />
              <RoomDisabled width={'100%'} height={'40px'}>
                <ToiletWomen />
              </RoomDisabled>
              <RoomDisabled width={'100%'} height={'40px'}>
                <ToiletMen />
              </RoomDisabled>
              <Stair width={'100%'} height={'16px'} />
              <RoomDisabled width={'100%'} height={'30px'}></RoomDisabled>
            </Col>
          </Row>
        </FloorContent>
      </Floor>
    </Wrapper>
  );
};

export default Building3;
