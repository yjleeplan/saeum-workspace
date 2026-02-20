import { Image } from 'antd';
import React from 'react';
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
import altar from 'assets/images/prayer-altar/altar.png';
import fire from 'assets/images/prayer-altar/fire.gif';
import fireYellow from 'assets/images/prayer-altar/fire_yellow.gif';
import fireBlue from 'assets/images/prayer-altar/fire_blue.gif';

interface PrayerAltarImageProps {
  laneNo: number;
  percent: number;
}

const PrayerAltarImage = ({ laneNo, percent }: PrayerAltarImageProps) => {
  // Prayer 이미지 소스
  const prayerSource = () => {
    let status = 'sad';

    // 출석율 40% 이상 이면서 90% 미만이면 기본 이미지
    if (40 <= percent && percent < 90) {
      status = 'base';
    }

    // 출석율 90% 이상이면 기쁜 이미지
    if (90 <= percent) {
      status = 'glad';
    }

    const key = `prayer_${laneNo}_${status}`;

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

  // 불 이미지 소스
  const fireSource = () => {
    // 출석율 85% 이상은 파란색 불
    if (percent >= 85) {
      return fireBlue;
    }

    // 출석율 65% 이상은 노란색 불
    if (percent >= 65) {
      return fireYellow;
    }

    return fire;
  };

  // 타이틀 이미지 소스
  const titleSource = () => {
    const key = `prayer_title_${laneNo}`;

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

  // Top 사이즈
  const getTopSize = () => {
    const percentValue = percent > 100 ? 100 : percent;
    const defaultSize = 22;
    const unitSize = 0.7;
    const topSize = defaultSize - unitSize * percentValue;

    return `${topSize}%`;
  };

  // Scale 사이즈
  const getScaleSize = () => {
    const percentValue = percent > 100 ? 100 : percent;
    const unitSize = 0.02;
    const scaleSize = unitSize * percentValue;

    return `scale(${scaleSize})`;
  };

  return (
    <div className='prayer-altar'>
      <div className='prayer-altar-layer-1'>
        <div className='prayer'>
          <Image src={prayerSource()} width={'6vw'} preview={false} />
        </div>
        <div className='altar'>
          <Image src={altar} width={'5vw'} preview={false} />
        </div>
        <div className='fire' style={{ top: getTopSize(), transform: getScaleSize() }}>
          <Image src={fireSource()} width={'6vw'} preview={false} />
        </div>
      </div>
      <div className='prayer-altar-layer-2'>
        <Image src={titleSource()} width={'10vw'} preview={false} />
      </div>
    </div>
  );
};

export default PrayerAltarImage;
