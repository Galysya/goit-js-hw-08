import Player from '@vimeo/player';
import  throttle  from 'lodash.throttle';

const iframeVideoElem = document.querySelector('#vimeo-player');


const player = new Player(iframeVideoElem, {
  id: 19231868,
  width: 640,
});

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(data) {

localStorage.setItem('videoplayer-current-time', data.seconds);

  console.log(data.seconds);
}

export function saveToLs(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function loadFromLS(key) {
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch (err) {
    console.log(err);
    return data;
  }
}

