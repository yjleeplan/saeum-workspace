import posterGame1 from 'assets/images/nehem-road/poster_game1.png';
import posterGame2 from 'assets/images/nehem-road/poster_game2.png';
import posterGame3 from 'assets/images/nehem-road/poster_game3.png';
import posterGame4 from 'assets/images/nehem-road/poster_game4.png';

export const getGamePoster = (id: string) => {
  return {
    '1': posterGame1,
    '2': posterGame2,
    '3': posterGame3,
    '4': posterGame4,
  }[id];
};
