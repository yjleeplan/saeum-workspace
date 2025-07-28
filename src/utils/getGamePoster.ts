import posterGame1 from 'assets/images/nehem-road/poster_game1.png';
import posterGame2 from 'assets/images/nehem-road/poster_game2.png';
import posterGame3 from 'assets/images/nehem-road/poster_game3.png';
import posterGame4 from 'assets/images/nehem-road/poster_game4.png';
import posterGame5 from 'assets/images/nehem-road/poster_game5.png';
import posterGame6 from 'assets/images/nehem-road/poster_game6.png';
import posterGame7 from 'assets/images/nehem-road/poster_game7.png';
import posterGame8 from 'assets/images/nehem-road/poster_game8.png';
import posterGame9 from 'assets/images/nehem-road/poster_game9.png';
import posterGame10 from 'assets/images/nehem-road/poster_game10.png';
import posterGame11 from 'assets/images/nehem-road/poster_game11.png';
import posterGame12 from 'assets/images/nehem-road/poster_game12.png';
import posterGame13 from 'assets/images/nehem-road/poster_game13.png';
import posterGame14 from 'assets/images/nehem-road/poster_game14.png';
import posterGame15 from 'assets/images/nehem-road/poster_game15.png';
import posterGame16 from 'assets/images/nehem-road/poster_game16.png';
import posterGame17 from 'assets/images/nehem-road/poster_game17.png';
import posterGame18 from 'assets/images/nehem-road/poster_game18.png';

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
    25: posterGame5, // 집 밖을 나왔더니 성벽이?!
    8: posterGame6, // 묵언열차
    9: posterGame7, // 와 성경이 들린다
    10: posterGame8, // 네헴의 4번 타자
    11: posterGame8, // 네헴의 4번 타자
    12: posterGame9, // 믿음의 한줄
    13: posterGame10, // 장인의 손길
    14: posterGame10, // 장인의 손길
    23: posterGame11, // 믿음의 타이밍
    15: posterGame12, // 어? 당겨지네
    16: posterGame13, // 믿.소.사.예~
    17: posterGame14, // 어디로 가야헴 >o<
    18: posterGame14, // 어디로 가야헴 >o<
    19: posterGame15, // 기억나니..? 우리가 쌓았던 그 벽돌..
    20: posterGame16, // 후프의 칼날
    21: posterGame17, // 벽돌 업고 튀어
    22: posterGame17, // 벽돌 업고 튀어
    24: posterGame18, // 코이노니아 카페
  }[id];
};
