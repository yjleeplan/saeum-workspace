import { Col, Row, Image, Card } from 'antd';
import _ from 'lodash';
import IconBasketball from 'assets/images/missionary-market/icon_game_basketball.png';
import IconCurling from 'assets/images/missionary-market/icon_game_curling.png';
import IconCupPingpong from 'assets/images/missionary-market/icon_game_cup_pingpong.png';
import { useMissionaryMarket } from './hooks/useMissionaryMarket';

interface MissionaryMarket2025Props {
  setIsLoading?: (data: boolean) => void;
}

const MissionaryMarket2025 = ({ setIsLoading }: MissionaryMarket2025Props) => {
  const { rankList } = useMissionaryMarket();

  return (
    <>
      <Image className='icon-game-basketball' width={170} src={IconBasketball} preview={false} />
      <Image className='icon-game-curling' width={190} src={IconCurling} preview={false} />
      <Image className='icon-game-cup-pingpong' width={220} src={IconCupPingpong} preview={false} />
      <Row className='rank-header'>
        <Col span={24}>
          <span>선</span>
          <span>교</span> <span>올</span>
          <span>림</span>
          <span>픽</span>
        </Col>
      </Row>
      <Row className='rank-content'>
        <Col span={8} className='rank-card rank-card-1 pl-50 pr-25'>
          <Card title='농구' bordered={false}>
            {_.map(rankList?.list1, (item, index) => {
              const rank = index === 0 ? 'rank rank1' : index === 1 ? 'rank rank2' : index === 2 ? 'rank rank3' : '';

              return (
                <Row key={index} className={`rank-list-data-row ${rank}`}>
                  <Col span={3} className='rank-list-data-col-1'>
                    {index + 1}
                  </Col>
                  <Col span={9} className='rank-list-data-col-2'>
                    {item['name']}
                  </Col>
                  <Col span={12} className='rank-list-data-col-3'>
                    {item['point']?.toLocaleString('ko-KR')}
                  </Col>
                </Row>
              );
            })}
          </Card>
        </Col>
        <Col span={8} className='rank-card rank-card-6 pl-25 pr-25'>
          <Card title='컬링' bordered={false}>
            {_.map(rankList.list2, (item, index) => {
              const rank = index === 0 ? 'rank rank1' : index === 1 ? 'rank rank2' : index === 2 ? 'rank rank3' : '';

              return (
                <Row key={index} className={`rank-list-data-row ${rank}`}>
                  <Col span={3} className='rank-list-data-col-1'>
                    {index + 1}
                  </Col>
                  <Col span={9} className='rank-list-data-col-2'>
                    {item['name']}
                  </Col>
                  <Col span={12} className='rank-list-data-col-3'>
                    {item['point'].toLocaleString('ko-KR')}
                  </Col>
                </Row>
              );
            })}
          </Card>
        </Col>
        <Col span={8} className='rank-card rank-card-3 pl-25 pr-50'>
          <Card title='탁구공 넣기' bordered={false}>
            {_.map(rankList.list3, (item, index) => {
              const rank = index === 0 ? 'rank rank1' : index === 1 ? 'rank rank2' : index === 2 ? 'rank rank3' : '';

              return (
                <Row key={index} className={`rank-list-data-row ${rank}`}>
                  <Col span={3} className='rank-list-data-col-1'>
                    {index + 1}
                  </Col>
                  <Col span={9} className='rank-list-data-col-2'>
                    {item['name']}
                  </Col>
                  <Col span={12} className='rank-list-data-col-3'>
                    {item['point'].toLocaleString('ko-KR')}
                  </Col>
                </Row>
              );
            })}
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default MissionaryMarket2025;
