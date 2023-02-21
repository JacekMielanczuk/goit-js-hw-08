import '../css/common.css';
import Player from '@vimeo/player';
import { throttle } from 'lodash';

const TIME_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const onPlay = function (data) {
  const stringfyData = JSON.stringify(data);
  localStorage.setItem(TIME_KEY, stringfyData);
};
player.on('timeupdate', throttle(onPlay, 1000));
