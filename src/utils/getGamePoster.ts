import posterGame1 from 'assets/images/nehem-road/poster_game1.png';
import posterGame2 from 'assets/images/nehem-road/poster_game2.png';
import posterGame3 from 'assets/images/nehem-road/poster_game3.png';
import posterGame4 from 'assets/images/nehem-road/poster_game4.png';
import posterGame5 from 'assets/images/nehem-road/poster_game5.png';
import posterGame6 from 'assets/images/nehem-road/poster_game6.png';
import posterGame7 from 'assets/images/nehem-road/poster_game7.png';
import posterGame8 from 'assets/images/nehem-road/poster_game8.png';

// 게임 포스터 이미지 소스 추출
export const getGamePoster = (id: number) => {
  return {
    1: posterGame1, // 네헤브릭
    2: posterGame2, // 벽돌을 지켜라
    3: posterGame3, // 경로를 재탐색합니다
    4: posterGame3, // 경로를 재탐색합니다
    5: posterGame4, // 파수꾼의 계산법
    6: posterGame4, // 파수꾼의 계산법
    7: posterGame5, // 집 밖을 나왔더니 성벽이?!
    8: posterGame6, // 묵언열차
    9: posterGame7, // 와 성경이 들린다
    10: posterGame8, // 네헴의 4번 타자
    11: posterGame8, // 네헴의 4번 타자
  }[id];
};
