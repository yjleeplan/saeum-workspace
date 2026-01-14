import { Col, Row, Image, Tabs, Button } from 'antd';
import _ from 'lodash';
import React, { useState, useEffect, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import title from 'assets/images/title_mapstatus.png';
import FlagImage from 'components/FlagImage';
import { SyncOutlined } from '@ant-design/icons';
import { queries } from 'api/queries';

interface MapStatusProps {
  setIsLoading: (data: boolean) => void;
}

const MapStatus = ({ setIsLoading }: MapStatusProps) => {
  // Tab Items
  const tabItems = [
    {
      label: '조별',
      children: '',
      key: 'team',
    },
    {
      label: '나라별',
      children: '',
      key: 'country',
    },
  ];

  let timer;

  /** State */
  const [activeKey, setActiveKey] = useState('team');

  // 팀 목록 조회 API
  const {
    data: teamListQueryData = [],
    refetch: refetchTeamList,
    isSuccess: teamListQuerySuccess,
    isFetching: teamListFetching,
  } = useQuery({
    ...queries.map.teamList({
      order_by_column: 'team_total',
      order_by_value: 'desc',
    }),
    staleTime: 500,
    cacheTime: 1000,
  });

  // 팀 목록 데이터 세팅
  const teamList = useMemo(() => {
    if (teamListQuerySuccess) {
      return teamListQueryData;
    }
  }, [teamListQueryData]);

  // 나라 목록 조회 API
  const {
    data: countryListQueryData = [],
    refetch: refetchCountryList,
    isSuccess: countryListQuerySuccess,
    isFetching: countryListFetching,
  } = useQuery({
    ...queries.map.countryList({}),
    staleTime: 500,
    cacheTime: 1000,
  });

  // 나라 목록 데이터 세팅
  const countryList = useMemo(() => {
    if (countryListQuerySuccess) {
      return countryListQueryData;
    }
  }, [countryListQueryData]);

  // 탭 내용 생성
  const generateItems = () => {
    let children = '';

    if (activeKey === 'team') {
      children = _.map(teamList, (item, index) => {
        return (
          <Row
            key={index}
            className='team-info-row'
            //onClick={(event) => onSelectedTeam(event, item, index)}
          >
            <Col span={3} className='team-info-col-1'>
              <input className='team-color-input' type='color' value={item.team_color} disabled />
            </Col>
            <Col span={4} className='team-info-col-2'>
              <span>{item.team_no}조</span>
            </Col>
            <Col span={5} className='team-info-col-3'>
              <span style={{ color: '#454545', paddingLeft: '10px' }}>[{item.team_total}개]</span>
            </Col>
            <Col span={12} className='team-info-col-4'>
              <span style={{ color: '#9E9FA5' }}>{item.team_current}</span>
            </Col>
          </Row>
        );
      });
    } else {
      children = _.map(countryList, (item, index) => {
        return (
          <Row key={index} className='country-info-row'>
            <Col span={20} className='country-info-col-1'>
              <FlagImage size={24} name={item.country_name} />
              <span style={{ color: item.country_team_no ? '#000' : '#9E9FA5' }}>{item.country_name}</span>
            </Col>
            <Col span={4} className=''>
              <span>{item.country_team_no ? item.country_team_no + '조' : ''}</span>
            </Col>
          </Row>
        );
      });
    }

    tabItems[_.findIndex(tabItems, { key: activeKey })].children = children;

    return tabItems;
  };

  // 탭 선택
  const handleChange = (key: string) => {
    setActiveKey(key);
  };

  // 새로고침
  const onRefresh = () => {
    window.location.reload();
  };

  /** Effect */
  useEffect(() => {
    // Ios 에서는 vh 적용이 되지 않는 문제
    let vh = window.innerHeight;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // 화면 리사이징 때마다 계산
    window.addEventListener('resize', () => {
      let vh = window.innerHeight;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    setIsLoading(true);
    timer = setTimeout(() => {
      clearTimeout(timer);
      setIsLoading(false);
    }, 2000);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className='map-status-refresh'>
        <Button>
          <SyncOutlined onClick={onRefresh} />
        </Button>
      </div>
      <Row className='map-status-title'>
        <Col span={24}>
          <Image width={120} height={100} src={title} preview={false} />
        </Col>
      </Row>
      <Tabs type='card' onChange={handleChange} activeKey={activeKey} items={generateItems()} />
    </>
  );
};

export default MapStatus;
