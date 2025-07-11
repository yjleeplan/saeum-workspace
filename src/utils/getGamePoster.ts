import posterGame1 from 'assets/images/nehem-road/poster_game1.png';
import posterGame2 from 'assets/images/nehem-road/poster_game2.png';
import posterGame3 from 'assets/images/nehem-road/poster_game3.png';
import posterGame4 from 'assets/images/nehem-road/poster_game4.png';

// 게임 포스터 이미지 소스 추출
export const getGamePoster = (id: string) => {
  return {
    '1': posterGame1,
    '2': posterGame2,
    '3': posterGame3,
    '4': posterGame4,
  }[id];
};
