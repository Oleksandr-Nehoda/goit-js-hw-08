
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const onPlay = function({seconds}) {
   const timePlayer = seconds;
   localStorage.setItem('videoplayer-current-time', timePlayer);
};

player.on('timeupdate', throttle(onPlay, 1000));


const sevedTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(sevedTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            'the time was less than 0 or greater than the video’s duration'
            break;

        default:
            'some other error occurred'
            break;
    }
});