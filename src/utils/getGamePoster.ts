import posterGame1 from 'assets/images/nehem-road/poster_game1.png';
import posterGame2 from 'assets/images/nehem-road/poster_game2.png';
import posterGame3 from 'assets/images/nehem-road/poster_game3.png';
import posterGame4 from 'assets/images/nehem-road/poster_game4.png';
import posterGame5 from 'assets/images/nehem-road/poster_game5.png';
import posterGame6 from 'assets/images/nehem-road/poster_game6.png';
import posterGame7 from 'assets/images/nehem-road/poster_game7.png';
import posterGame8 from 'assets/images/nehem-road/poster_game8.png';

// 게임 포스터 이미지 소스 추출
export const getGamePoster = (id: string) => {
  return {
    '1': posterGame1,
    '2': posterGame2,
    '3': posterGame3,
    '4': posterGame4,
    '5': posterGame5,
    '6': posterGame5,
    '7': posterGame6,
    '8': posterGame7,
    '9': posterGame8,
    '10': posterGame8,
  }[id];
};
