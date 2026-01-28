import _ from 'lodash';
import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { MapContainer, GeoJSON, Marker, Popup, useMapEvents } from 'react-leaflet';
import { FeatureCollection } from 'geojson';
import countries from './data/countries.json';
import 'leaflet/dist/leaflet.css';
import { Icon, Map as LeafletMapType, GeoJSON as LeafletGeoJSON, Path } from 'leaflet';
import { Col, Row, Input, Modal, message } from 'antd';
import { FullscreenOutlined, SettingOutlined } from '@ant-design/icons';
import TeamDeleteModal from 'components/_modal/TeamDeleteModal';
import FlagImage from 'components/FlagImage';
import { queries } from 'api/queries';
import { usePutTeamCurrent, usePostCountry } from 'api/useMapApi';
import type { Team, PutTeamCurrentRequest, PostCountryRequest } from 'types';

const jsonData = countries as FeatureCollection;

const { Search } = Input;

interface MapProps {
  setIsLoading: (data: boolean) => void;
}

const Map = () => {
  const { setIsLoading }: MapProps = useOutletContext();

  /** State */
  const [selectedTeam, setSelectedTeam] = useState<Team>();
  const [teamDeleteModalVisible, setTeamDeleteModalVisible] = useState(false);
  const mapRef = useRef<LeafletMapType>(null);
  const geoJsonRef = useRef<LeafletGeoJSON>(null!);

  // 팀 목록 조회 API
  const {
    data: teamListQueryData = [],
    refetch: refetchTeamList,
    isSuccess: teamListQuerySuccess,
  } = useQuery({
    ...queries.map.teamList({
      order_by_column: 'team_no',
      order_by_value: 'asc',
    }),
    staleTime: 500,
    cacheTime: 1000,
  });

  // 팀 목록 데이터 세팅
  const teamList = useMemo(() => {
    if (teamListQuerySuccess) {
      !selectedTeam && setSelectedTeam(teamListQueryData[0]);
      return teamListQueryData;
    } else {
      return [];
    }
  }, [teamListQueryData]);

  // 나라 목록 조회 API
  const {
    data: countryListQueryData = [],
    refetch: refetchCountryList,
    isSuccess: countryListQuerySuccess,
  } = useQuery({
    ...queries.map.countryList({}),
    staleTime: 500,
    cacheTime: 1000,
  });

  // 나라 목록 데이터 세팅
  const countryList = useMemo(() => {
    if (countryListQuerySuccess) {
      const layers = geoJsonRef.current.getLayers();
      let searchedLayer = {} as Path;

      _.map(countryListQueryData, (item, index) => {
        searchedLayer = _.chain(layers)
          .filter((o: any) => {
            return item.country_name === o?.feature?.properties.NAME;
          })
          .head()
          .value() as Path;

        if (searchedLayer) {
          searchedLayer.setStyle({ fillColor: item.country_team_color ? item.country_team_color : '#F9F9F9' });
        }
      });

      return countryListQueryData;
    } else {
      return [];
    }
  }, [countryListQueryData]);

  // 복음화 API
  const { mutate: postCountry } = usePostCountry();
  const handlePostCountry = async (payload: PostCountryRequest) => {
    setIsLoading(true);

    postCountry(payload, {
      onSuccess: () => {
        message.success('복음화되었습니다.');
      },
      onError: (error: any) => {
        // 공통 처리
      },
      onSettled(data, error, variables, context) {
        refetchTeamList();
        refetchCountryList();
        setIsLoading(false);
      },
    });
  };

  // 현재위치 변경 API
  const { mutate: putTeamCurrent } = usePutTeamCurrent();
  const handlePutTeamCurrent = async (payload: PutTeamCurrentRequest) => {
    setIsLoading(true);

    putTeamCurrent(payload, {
      onSuccess: () => {
        message.success('현재위치가 변경되었습니다.');
      },
      onError: (error: any) => {
        // 공통 처리
      },
      onSettled(data, error, variables, context) {
        refetchTeamList();
        setIsLoading(false);
      },
    });
  };

  // 지도 줌 레벨 및 중앙값 초기화
  const initZoom = () => {
    mapRef?.current?.flyTo([51.505, -0.09], 2);
  };

  // 팀 선택
  const onSelectedTeam = (item: Team, index: number) => {
    setSelectedTeam(item);
  };

  // 나라 선택
  const onSelectedCountry = (event: any) => {
    console.log(event.target);

    event.target.setStyle({
      color: '#000',
      fillColor: selectedTeam?.team_color,
    });
  };

  // 지도에 그려지는 각 Feature에 대한 설정
  const onEachFeature = (feature: GeoJSON.Feature, layer: any) => {
    layer.bindPopup(feature?.properties?.NAME);
    layer.setStyle({
      color: '#000',
      fillColor: '#F9F9F9',
      fillOpacity: 1,
      weight: 1.2,
      dashArray: 1,
    });
    // layer.on({
    //   click: selectedCountry,
    //   //mouseover: selectedCountry,
    // });
  };

  // 팀 나라 삭제 모달 오픈
  const handleTeamDeleteModalOpen = () => {
    setTeamDeleteModalVisible(true);
  };

  // 팀 나라 삭제 모달 닫기
  const handleTeamDeleteModalClose = () => {
    setTeamDeleteModalVisible(false);
  };

  // 팀 나라 삭제
  const onDelete = () => {
    refetchTeamList();
    refetchCountryList();
  };

  // 검색
  const onSearch = (value: string) => {
    const layers = geoJsonRef.current.getLayers();
    const searchedLayer = _.chain(layers)
      .filter((o: any) => {
        return value === o?.feature?.properties.NAME;
      })
      .head()
      .value() as any;
    // 검색 결과가 존재하는 경우
    if (searchedLayer) {
      //console.log(searchedLayer.getCenter());

      // 좌표로 이동
      mapRef?.current?.flyTo(searchedLayer?.feature?.properties?.CENTER, searchedLayer?.feature?.properties?.ZOOM);

      // Confirm 창 오픈
      Modal.confirm({
        className: 'confirm-search-result',
        icon: false,
        title: `${selectedTeam?.team_no}조`,
        content: (
          <>
            <FlagImage size={40} name={value} />
            {value}
          </>
        ),
        okText: '복음화',
        cancelText: '취소',
        onOk: async () => {
          handlePostCountry({
            team_no: selectedTeam?.team_no!,
            country_name: value,
          });
        },
        onCancel: async () => {
          handlePutTeamCurrent({
            team_no: selectedTeam?.team_no!,
            country_name: value,
          });
        },
      });
    } else {
      message.error('검색 결과가 없습니다.');
    }
  };

  return (
    <>
      <div id='team-info'>
        <Row className='team-info-search-row'>
          <Col span={24} className='team-info-search-col'>
            <Search placeholder='Input search text' onSearch={onSearch} />
          </Col>
        </Row>
        {_.map(teamList, (item, index) => {
          return (
            <Row
              key={index}
              className={selectedTeam?.team_no === item.team_no ? 'team-info-row selected' : 'team-info-row'}
              onClick={(event) => onSelectedTeam(item, index)}
            >
              <Col span={4} className='team-info-col-1'>
                <input className='team-color-input' type='color' value={item.team_color} disabled />
              </Col>
              <Col span={4} className='team-info-col-2'>
                <span>{item.team_no}조</span>
              </Col>
              <Col span={6} className='team-info-col-3'>
                <span style={{ fontSize: '16px', color: '#454545', paddingLeft: '10px' }}>[{item.team_total}개]</span>
              </Col>
              <Col span={10} className='team-info-col-4'>
                <span style={{ fontSize: '16px', color: '#9E9FA5' }}>{item.team_current}</span>
              </Col>
            </Row>
          );
        })}
      </div>
      <div id='map-info'>
        <div id='map-control'>
          <FullscreenOutlined onClick={initZoom} />
          <SettingOutlined onClick={handleTeamDeleteModalOpen} />
        </div>
        <MapContainer
          ref={mapRef}
          center={[51.505, -0.09]}
          zoom={2}
          minZoom={2}
          style={{ height: '100%', background: '#FFF' }}
          zoomControl={false}
        >
          <GeoJSON ref={geoJsonRef} data={jsonData} onEachFeature={onEachFeature} />
        </MapContainer>
      </div>
      <div id='teamDeleteModal'>
        <TeamDeleteModal
          visible={teamDeleteModalVisible}
          onCancel={handleTeamDeleteModalClose}
          setIsLoading={setIsLoading}
          selectedTeam={selectedTeam}
          onDelete={onDelete}
        />
      </div>
    </>
  );
};

export default Map;
