import {
  Wrapper,
  PosterWrapper,
  Poster,
  PosterPc,
  DescriptionWrapper,
  DescriptionTitle,
  Description,
  DescriptionTitleLarge,
  DescriptionLarge,
} from './Home.styles';

interface NehemRoadHomeProps {
  isMobile: boolean;
}

const NehemRoadHome = ({ isMobile }: NehemRoadHomeProps) => {
  return (
    <Wrapper ismobile={isMobile.toString()}>
      <PosterWrapper>{isMobile ? <Poster /> : <PosterPc />}</PosterWrapper>
      <DescriptionWrapper ismobile={isMobile.toString()}>
        <DescriptionTitle ismobile={isMobile.toString()}>1. 수심</DescriptionTitle>
        <Description ismobile={isMobile.toString()}>[느 2:1] ...이전에는 내가 왕 앞에서 수심이 없었더니</Description>
        <Description ismobile={isMobile.toString()}>
          [느 2:2] 왕이 내게 이르시되 ...어찌하여 얼굴에 수심이 있느냐...
        </Description>

        <DescriptionTitle ismobile={isMobile.toString()}>2. Come, let us build</DescriptionTitle>
        <Description ismobile={isMobile.toString()}>
          [느 2:17] ...예루살렘이 황폐하고 성문이 불탔으니 자, 예루살렘 성을 건축하여 다시 수치를 당하지 말자 하고
        </Description>
        <Description ismobile={isMobile.toString()}>
          [느 2:18] ...그들의 말이 일어나 건축하자 하고 모두 힘을 내어 이 선한 일을 하려 하매
        </Description>

        <DescriptionTitle ismobile={isMobile.toString()}>3. 비웃음</DescriptionTitle>
        <Description ismobile={isMobile.toString()}>
          [느 4:1] 산발랏이 우리가 성을 건축한다 함을 듣고 크게 분노하여 유다 사람들을 비웃으며
        </Description>
        <Description ismobile={isMobile.toString()}>
          [느 4:2] ...이 미약한 유다 사람들이 하는 일이 무엇인가...
        </Description>

        <DescriptionTitle ismobile={isMobile.toString()}>4. 벽돌과 칼</DescriptionTitle>
        <Description ismobile={isMobile.toString()}>
          [느 4:17] 성을 건축하는 자와 짐을 나르는 자는 다 각각 한 손으로 일을 하며 한 손에는 병기를 잡았는데
        </Description>
        <Description ismobile={isMobile.toString()}>
          [느 4:23] ...우리가 다 우리의 옷을 벗지 아니하였으며 물을 길으러 갈 때에도 각각 병기를 잡았느니라
        </Description>

        <DescriptionTitle ismobile={isMobile.toString()}>5. 52</DescriptionTitle>
        <Description ismobile={isMobile.toString()}>
          [느 6:15] 성벽 역사가 오십이 일 만인 엘룰월 이십오일에 끝나매
        </Description>
        <Description ismobile={isMobile.toString()}>
          [느 6:16] 우리의 모든 대적과 주위에 있는 이방 족속들이 이를 듣고 다 두려워하여 크게 낙담하였으니 그들이 우리
          하나님께서 이 역사를 이루신 것을 앎이니라
        </Description>

        <DescriptionTitleLarge ismobile={isMobile.toString()}>그리고 52일후,</DescriptionTitleLarge>
        <DescriptionLarge ismobile={isMobile.toString()}>
          수원제일교회X금광교회X은혜샘교회 청년들의 여정이 시작됩니다.
        </DescriptionLarge>
        <DescriptionLarge ismobile={isMobile.toString()}>NEHEM ROAD는 여러분을 맞이합니다.</DescriptionLarge>
      </DescriptionWrapper>
    </Wrapper>
  );
};

export default NehemRoadHome;
