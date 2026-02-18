import { useQuery } from '@tanstack/react-query';
import { useEffect, useState, useMemo } from 'react';
import { queries } from 'api/queries';
import PrayerAltarImage from './PrayerAltarImage';

const PrayerAltar = () => {
  return (
    <>
      <div className='prayer-altar-wrap'>
        <div className='prayer-altar-title' />
        <div className='prayer-altar-content'>
          <PrayerAltarImage laneNo={1} prayerStatus={'glad'} />
          <PrayerAltarImage laneNo={2} prayerStatus={'base'} />
          <PrayerAltarImage laneNo={3} prayerStatus={'base'} />
          <PrayerAltarImage laneNo={4} prayerStatus={'sad'} />
          <PrayerAltarImage laneNo={5} prayerStatus={'base'} />
          <PrayerAltarImage laneNo={6} prayerStatus={'glad'} />
          <PrayerAltarImage laneNo={7} prayerStatus={'sad'} />
          <PrayerAltarImage laneNo={8} prayerStatus={'base'} />
        </div>
      </div>
      <div className='chat-wrap'>
        <div className='chat-title-wrap'>
          <div className='chat-title' />
        </div>
        <div className='chat-content'></div>
      </div>
    </>
  );
};

export default PrayerAltar;
