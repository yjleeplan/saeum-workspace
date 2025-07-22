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
  Col2,
  Room,
  RoomDisabled,
  Stair,
  ToiletMen,
  ToiletWomen,
} from './Building2.styles';

interface BuildingProps {
  isRotate: boolean;
  onClick: (id: number) => void;
  setIsLoading: (data: boolean) => void;
}

// 로뎀의 집
const Building2 = ({ isRotate, onClick, setIsLoading }: BuildingProps) => {
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
      parent_id: 2,
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
      {/* 4층 */}
      <Floor rotate={isRotate.toString()}>
        <FloorTitle>4층</FloorTitle>
        <FloorContent height={'220px'} rotate={isRotate.toString()}>
          <Row>
            <Col width={'60%'}>
              <Row>
                <Stair width={'12%'} height={'80px'} />
                <RoomDisabled width={'12%'} height={'40px'}>
                  EV
                </RoomDisabled>
                <RoomDisabled width={'8%'} height={'40px'}></RoomDisabled>
                <Room width={'32%'} height={'80px'} onClick={() => onClick(5)}>
                  <Image width={'100%'} height={'100%'} src={getGamePoster(5)} preview={false} />
                </Room>
                <Room width={'32%'} height={'80px'}>
                  어디로 가야헴 {'>o<'}
                </Room>
              </Row>
              <Row>
                <RoomDisabled width={'17%'} height={'100%'}>
                  401-1
                </RoomDisabled>
                <RoomDisabled width={'17%'} height={'100%'}>
                  와 성경이 들린다
                </RoomDisabled>
                <RoomDisabled width={'17%'} height={'100%'}>
                  402-1
                </RoomDisabled>
                <RoomDisabled width={'17%'} height={'100%'}>
                  402-2
                </RoomDisabled>
                <RoomDisabled width={'17%'} height={'100%'}>
                  403-1
                </RoomDisabled>
                <RoomDisabled width={'17%'} height={'100%'}>
                  403-2
                </RoomDisabled>
              </Row>
            </Col>
            <Col2 width={'40%'}>
              <Row>
                <RoomDisabled width={'25%'} height={'80px'}>
                  411
                </RoomDisabled>
                <RoomDisabled width={'25%'} height={'80px'}>
                  410
                </RoomDisabled>
                <RoomDisabled width={'25%'} height={'80px'}>
                  409
                </RoomDisabled>
                <RoomDisabled width={'25%'} height={'80px'}>
                  408
                </RoomDisabled>
              </Row>
              <Row height='initial'>
                <Room width={'50%'} height={'80px'} onClick={() => onClick(7)}>
                  <Image width={'100%'} height={'100%'} src={getGamePoster(7)} preview={false} />
                </Room>
                <RoomDisabled width={'25%'} height={'80px'}>
                  406
                </RoomDisabled>
                <RoomDisabled width={'25%'} height={'80px'}>
                  407
                </RoomDisabled>
              </Row>
            </Col2>
          </Row>
        </FloorContent>
      </Floor>

      {/* 3층 */}
      <Floor rotate={isRotate.toString()}>
        <FloorTitle>3층</FloorTitle>
        <FloorContent height={'220px'} rotate={isRotate.toString()}>
          <Row>
            <Col width={'60%'}>
              <Row>
                <Stair width={'12%'} height={'80px'} />
                <RoomDisabled width={'12%'} height={'40px'}>
                  EV
                </RoomDisabled>
                <RoomDisabled width={'8%'} height={'40px'}></RoomDisabled>
                <RoomDisabled width={'32%'} height={'80px'}>
                  313
                </RoomDisabled>
                <RoomDisabled width={'32%'} height={'80px'}>
                  312
                </RoomDisabled>
              </Row>
              <Row>
                <Room width={'100%'} height={'100%'}>
                  코이노니아 카페
                </Room>
              </Row>
            </Col>
            <Col2 width={'40%'}>
              <Row>
                <RoomDisabled width={'25%'} height={'80px'}>
                  311
                </RoomDisabled>
                <RoomDisabled width={'25%'} height={'80px'}>
                  310
                </RoomDisabled>
                <RoomDisabled width={'25%'} height={'80px'}>
                  309
                </RoomDisabled>
                <RoomDisabled width={'25%'} height={'80px'}>
                  308
                </RoomDisabled>
              </Row>
              <Row height='initial'>
                <RoomDisabled width={'25%'} height={'80px'}>
                  304
                </RoomDisabled>
                <RoomDisabled width={'25%'} height={'80px'}>
                  305
                </RoomDisabled>
                <RoomDisabled width={'25%'} height={'80px'}>
                  306
                </RoomDisabled>
                <RoomDisabled width={'25%'} height={'80px'}>
                  307
                </RoomDisabled>
              </Row>
            </Col2>
          </Row>
        </FloorContent>
      </Floor>

      {/* 2층 */}
      <Floor rotate={isRotate.toString()}>
        <FloorTitle>2층</FloorTitle>
        <FloorContent height={'220px'} rotate={isRotate.toString()}>
          <Row>
            <Col width={'60%'}>
              <Row>
                <Stair width={'12%'} height={'80px'} />
                <RoomDisabled width={'12%'} height={'40px'}>
                  EV
                </RoomDisabled>
                <RoomDisabled width={'8%'} height={'40px'}></RoomDisabled>
                <RoomDisabled width={'21%'} height={'80px'}>
                  <ToiletWomen />
                </RoomDisabled>
                <RoomDisabled width={'21%'} height={'80px'}>
                  <ToiletMen />
                </RoomDisabled>
                <RoomDisabled width={'22%'} height={'80px'}>
                  사무실
                </RoomDisabled>
              </Row>
              <Row>
                <RoomDisabled width={'30%'} height={'100%'}>
                  201
                </RoomDisabled>
                <RoomDisabled width={'30%'} height={'100%'}>
                  202
                </RoomDisabled>
                <Room width={'43%'} height={'110px'} onClick={() => onClick(6)}>
                  <Image width={'100%'} height={'100%'} src={getGamePoster(6)} preview={false} />
                </Room>
              </Row>
            </Col>
            <Col2 width={'40%'}>
              <Row>
                <RoomDisabled width={'25%'} height={'80px'}>
                  208
                </RoomDisabled>
                <RoomDisabled width={'25%'} height={'80px'}>
                  207
                </RoomDisabled>
                <RoomDisabled width={'25%'} height={'80px'}>
                  206
                </RoomDisabled>
                <RoomDisabled width={'25%'} height={'80px'}>
                  205
                </RoomDisabled>
              </Row>
              <Row height='initial'>
                <RoomDisabled width={'75%'} height={'80px'}>
                  원장 사택
                </RoomDisabled>
                <RoomDisabled width={'25%'} height={'80px'}>
                  204
                </RoomDisabled>
              </Row>
            </Col2>
          </Row>
        </FloorContent>
      </Floor>

      {/* 1층 */}
      <Floor rotate={isRotate.toString()}>
        <FloorTitle>1층</FloorTitle>
        <FloorContent height={'220px'} rotate={isRotate.toString()}>
          <Row>
            <Col width={'60%'}>
              <Row>
                <Stair width={'12%'} height={'80px'} />
                <RoomDisabled width={'12%'} height={'40px'}>
                  EV
                </RoomDisabled>
                <RoomDisabled width={'8%'} height={'40px'}></RoomDisabled>
                <RoomDisabled width={'21%'} height={'80px'}>
                  <ToiletWomen />
                </RoomDisabled>
                <RoomDisabled width={'21%'} height={'80px'}>
                  <ToiletMen />
                </RoomDisabled>
                <RoomDisabled width={'22%'} height={'80px'}>
                  창고
                </RoomDisabled>
              </Row>
              <Row>
                <RoomDisabled width={'30%'} height={'100%'}>
                  전기실
                </RoomDisabled>
                <RoomDisabled width={'30%'} height={'100%'}>
                  보일러실
                </RoomDisabled>
                <Room width={'43%'} height={'110px'} onClick={() => onClick(2)}>
                  <Image width={'100%'} height={'100%'} src={getGamePoster(2)} preview={false} />
                </Room>
              </Row>
            </Col>
            <Col2 width={'40%'}>
              <Row>
                <Room width={'100%'} height={'87px'} onClick={() => onClick(4)}>
                  <Image width={'100%'} height={'100%'} src={getGamePoster(4)} preview={false} />
                </Room>
              </Row>
              <Row>
                <Room width={'100%'} height={'87px'}>
                  어디로 가야헴 {'>o<'}
                </Room>
              </Row>
            </Col2>
          </Row>
        </FloorContent>
      </Floor>
    </Wrapper>
  );
};

export default Building2;
