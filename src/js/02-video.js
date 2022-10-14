import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCAL_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);



player.setCurrentTime(localStorage.getItem(LOCAL_KEY) || 0);

const timeUpdate = data => {
  console.log(data);
  localStorage.setItem(LOCAL_KEY, data.seconds);
};

player.on('timeupdate', throttle(timeUpdate, 1000));
