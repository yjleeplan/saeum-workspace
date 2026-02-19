import { useQuery } from '@tanstack/react-query';
import { useState, useMemo } from 'react';
import { queries } from 'api/queries';
import { Image, Progress } from 'antd';
import { PRAYER_ALTAR } from './config/config';
import _ from 'lodash';
import title from 'assets/images/prayer-altar/title.png';
import prayer1 from 'assets/images/prayer-altar/prayer_1.gif';
import prayer1Glad from 'assets/images/prayer-altar/prayer_1_glad.gif';
import prayer1Sad from 'assets/images/prayer-altar/prayer_1_sad.gif';
import prayer2 from 'assets/images/prayer-altar/prayer_2.gif';
import prayer2Glad from 'assets/images/prayer-altar/prayer_2_glad.gif';
import prayer2Sad from 'assets/images/prayer-altar/prayer_2_sad.gif';
import prayer3 from 'assets/images/prayer-altar/prayer_3.gif';
import prayer3Glad from 'assets/images/prayer-altar/prayer_3_glad.gif';
import prayer3Sad from 'assets/images/prayer-altar/prayer_3_sad.gif';
import prayer4 from 'assets/images/prayer-altar/prayer_4.gif';
import prayer4Glad from 'assets/images/prayer-altar/prayer_4_glad.gif';
import prayer4Sad from 'assets/images/prayer-altar/prayer_4_sad.gif';
import prayer5 from 'assets/images/prayer-altar/prayer_5.gif';
import prayer5Glad from 'assets/images/prayer-altar/prayer_5_glad.gif';
import prayer5Sad from 'assets/images/prayer-altar/prayer_5_sad.gif';
import prayer6 from 'assets/images/prayer-altar/prayer_6.gif';
import prayer6Glad from 'assets/images/prayer-altar/prayer_6_glad.gif';
import prayer6Sad from 'assets/images/prayer-altar/prayer_6_sad.gif';
import prayer7 from 'assets/images/prayer-altar/prayer_7.gif';
import prayer7Glad from 'assets/images/prayer-altar/prayer_7_glad.gif';
import prayer7Sad from 'assets/images/prayer-altar/prayer_7_sad.gif';
import prayer8 from 'assets/images/prayer-altar/prayer_8.gif';
import prayer8Glad from 'assets/images/prayer-altar/prayer_8_glad.gif';
import prayer8Sad from 'assets/images/prayer-altar/prayer_8_sad.gif';
import prayerTitle1 from 'assets/images/prayer-altar/prayer_title1.png';
import prayerTitle2 from 'assets/images/prayer-altar/prayer_title2.png';
import prayerTitle3 from 'assets/images/prayer-altar/prayer_title3.png';
import prayerTitle4 from 'assets/images/prayer-altar/prayer_title4.png';
import prayerTitle5 from 'assets/images/prayer-altar/prayer_title5.png';
import prayerTitle6 from 'assets/images/prayer-altar/prayer_title6.png';
import prayerTitle7 from 'assets/images/prayer-altar/prayer_title7.png';
import prayerTitle8 from 'assets/images/prayer-altar/prayer_title8.png';
import fire from 'assets/images/prayer-altar/fire.gif';
import fireGlad from 'assets/images/prayer-altar/fire_glad.gif';
import fireSad from 'assets/images/prayer-altar/fire_sad.gif';

interface PrayerAltarMobileProps {
  setIsLoading?: (data: boolean) => void;
}

const PrayerAltarMobile = ({ setIsLoading }: PrayerAltarMobileProps) => {
  /** State */
  const [prayerAltars, setPrayerAltars] = useState(PRAYER_ALTAR);

  // Prayer width size
  const prayerWidth = Number((document.body.offsetWidth * 18) / 100).toFixed(2);

  console.log(document.body.offsetWidth);

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
      let newData = PRAYER_ALTAR;

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
        } else if (item?.department_name === '세붐마을') {
          newData[5].percent = parseFloat(
            Number((item?.total_attendance_count * 100) / item?.max_attendance_count).toFixed(2),
          );
        } else if (item?.department_name === '새움청년부') {
          newData[6].percent = parseFloat(
            Number((item?.total_attendance_count * 100) / item?.max_attendance_count).toFixed(2),
          );
        } else if (item?.department_name === '주일학교') {
          newData[7].percent = parseFloat(
            Number((item?.total_attendance_count * 100) / item?.max_attendance_count).toFixed(2),
          );
        }
      });

      // 평균값을 기준으로 정렬
      let orderByPercentList = _.orderBy(newData, 'percent', 'desc');

      orderByPercentList[0].status = 'glad';
      orderByPercentList[1].status = 'glad';
      orderByPercentList[6].status = 'sad';
      orderByPercentList[7].status = 'sad';

      orderByPercentList[0].color = '#FBC738';
      orderByPercentList[1].color = '#FBC738';
      orderByPercentList[2].color = '#E94F32';
      orderByPercentList[3].color = '#E94F32';
      orderByPercentList[4].color = '#E94F32';
      orderByPercentList[5].color = '#E94F32';
      orderByPercentList[6].color = '#5A8CE9';
      orderByPercentList[7].color = '#5A8CE9';

      setPrayerAltars(orderByPercentList);
    }
  }, [departmentCountListQueryData]);

  // Prayer 이미지 소스
  const prayerSource = (lane: number, status: string) => {
    const key = `prayer_${lane}_${status}`;

    return {
      prayer_1_base: prayer1,
      prayer_1_glad: prayer1Glad,
      prayer_1_sad: prayer1Sad,
      prayer_2_base: prayer2,
      prayer_2_glad: prayer2Glad,
      prayer_2_sad: prayer2Sad,
      prayer_3_base: prayer3,
      prayer_3_glad: prayer3Glad,
      prayer_3_sad: prayer3Sad,
      prayer_4_base: prayer4,
      prayer_4_glad: prayer4Glad,
      prayer_4_sad: prayer4Sad,
      prayer_5_base: prayer5,
      prayer_5_glad: prayer5Glad,
      prayer_5_sad: prayer5Sad,
      prayer_6_base: prayer6,
      prayer_6_glad: prayer6Glad,
      prayer_6_sad: prayer6Sad,
      prayer_7_base: prayer7,
      prayer_7_glad: prayer7Glad,
      prayer_7_sad: prayer7Sad,
      prayer_8_base: prayer8,
      prayer_8_glad: prayer8Glad,
      prayer_8_sad: prayer8Sad,
    }[key];
  };

  // 타이틀 이미지 소스
  const titleSource = (lane: number) => {
    const key = `prayer_title_${lane}`;

    return {
      prayer_title_1: prayerTitle1,
      prayer_title_2: prayerTitle2,
      prayer_title_3: prayerTitle3,
      prayer_title_4: prayerTitle4,
      prayer_title_5: prayerTitle5,
      prayer_title_6: prayerTitle6,
      prayer_title_7: prayerTitle7,
      prayer_title_8: prayerTitle8,
    }[key];
  };

  // 불 이미지 소스
  const fireSource = (status: string) => {
    const key = `fire_${status}`;

    return {
      fire_base: fire,
      fire_glad: fireGlad,
      fire_sad: fireSad,
    }[key];
  };

  // 불 이미지 사이즈
  const getFireSize = (percent: number) => {
    const defaultSize = 5;
    const unitSize = 0.2;
    const scaleSize = percent > 0 ? defaultSize + unitSize * percent : 0;

    return `${scaleSize}vw`;
  };

  return (
    <>
      <div className='prayer-altar-mobile-title'>
        <Image width={300} src={title} preview={false} />
      </div>
      <div className='prayer-altar-mobile-content'>
        {_.map(prayerAltars, (item, index) => {
          return (
            <div className='prayer-altar-wrap' key={index}>
              <div className='prayer'>
                <Image src={prayerSource(item.lane, item.status)} width={`${prayerWidth}px`} preview={false} />
                <Image src={titleSource(item.lane)} width={`${prayerWidth}px`} preview={false} />
              </div>
              <div className='prayer-altar-progress-wrap'>
                <Progress
                  strokeColor={{
                    '0%': item.color,
                    '100%': item.color,
                  }}
                  status='active'
                  percent={item?.percent > 100 ? 100 : item?.percent}
                />
                <div className='prayer-altar-percent'>{item?.percent > 100 ? 100 : item?.percent}%</div>
                <div className='fire'>
                  <Image src={fireSource(item.status)} width={getFireSize(item.percent)} preview={false} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PrayerAltarMobile;
