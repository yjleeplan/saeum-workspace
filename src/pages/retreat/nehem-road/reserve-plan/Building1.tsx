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
  Corridor,
  Room,
  RoomDisabled,
  Stair,
  ToiletMen,
  ToiletWomen,
} from './Building1.styles';

interface BuildingProps {
  isRotate: boolean;
  onClick: (id: number) => void;
  setIsLoading: (data: boolean) => void;
}

// 벧엘의 집
const Building1 = ({ isRotate, onClick, setIsLoading }: BuildingProps) => {
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
      parent_id: 1,
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
        <FloorContent height={'200px'} rotate={isRotate.toString()}>
          <Row>
            <RoomDisabled width={'12%'} height={'80px'}>
              207
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'}>
              208
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'}>
              209
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'}>
              210
            </RoomDisabled>
            <Stair width={'12%'} height={'80px'} />
            <Room width={'24%'} height={'80px'} onClick={() => onClick(9)}>
              <Image width={'100%'} height={'100%'} src={getGamePoster(9)} preview={false} />
            </Room>
            <RoomDisabled width={'24%'} height={'80px'}>
              212
            </RoomDisabled>
          </Row>
          <Row>
            <RoomDisabled width={'18%'} height={'80px'}>
              201
            </RoomDisabled>
            <RoomDisabled width={'18%'} height={'80px'}>
              202
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'}>
              202
            </RoomDisabled>
            <Corridor width={'12%'} height={'80px'}></Corridor>
            <RoomDisabled width={'12%'} height={'80px'}>
              203
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'}>
              204
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'}>
              205
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'}>
              206
            </RoomDisabled>
          </Row>
        </FloorContent>
      </Floor>

      {/* 1층 */}
      <Floor rotate={isRotate.toString()}>
        <FloorTitle>1층</FloorTitle>
        <FloorContent height={'200px'} rotate={isRotate.toString()}>
          <Row>
            <Room width={'36%'} height={'80px'}>
              믿.소.사.예~
            </Room>
            <RoomDisabled width={'12%'} height={'80px'}>
              <ToiletWomen />
            </RoomDisabled>
            <Stair width={'12%'} height={'80px'} />
            <RoomDisabled width={'12%'} height={'80px'}>
              <ToiletMen />
            </RoomDisabled>
            <RoomDisabled width={'36%'} height={'80px'}>
              106
            </RoomDisabled>
          </Row>
          <Row>
            <Room width={'24%'} height={'80px'} onClick={() => onClick(10)}>
              <Image width={'100%'} height={'100%'} src={getGamePoster(10)} preview={false} />
            </Room>
            <Room width={'24%'} height={'80px'} onClick={() => onClick(11)}>
              <Image width={'100%'} height={'100%'} src={getGamePoster(11)} preview={false} />
            </Room>
            <Corridor width={'12%'} height={'80px'}></Corridor>
            <RoomDisabled width={'24%'} height={'80px'}>
              103
            </RoomDisabled>
            <RoomDisabled width={'24%'} height={'80px'}>
              104
            </RoomDisabled>
          </Row>
        </FloorContent>
      </Floor>

      {/* 3층 */}
      {/* <Floor>
        <FloorTitle>벧엘의 집 (3F)</FloorTitle>
        <FloorContent height={'200px'}>
          <Row>
            <RoomDisabled width={'12%'} height={'80px'} >
              309
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} >
              310
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} >
              311
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} >
              312
            </RoomDisabled>
            <Stair width={'12%'} height={'80px'} />
            <RoomDisabled width={'12%'} height={'80px'} >
              313
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} >
              314
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} >
              315
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} >
              316
            </RoomDisabled>
          </Row>
          <Row>
            <RoomDisabled width={'12%'} height={'80px'} >
              301
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} >
              302
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} >
              303
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} >
              304
            </RoomDisabled>
            <Corridor width={'12%'} height={'80px'}></Corridor>
            <RoomDisabled width={'12%'} height={'80px'} >
              305
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} >
              306
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} >
              307
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} >
              308
            </RoomDisabled>
          </Row>
        </FloorContent>

        {tooltip && (
          <Tooltip x={tooltip.x} y={tooltip.y}>
            {tooltip.text}
          </Tooltip>
        )}
      </Floor> */}
    </Wrapper>
  );
};

export default Building1;
