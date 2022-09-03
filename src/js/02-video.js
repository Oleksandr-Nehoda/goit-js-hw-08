
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});


const onPlay = function(data) {
   console.log(data)
};

player.on('timeupdate', onPlay);

player.setCurrentTime(40.000).then(function(seconds) {
    seconds = 40.000;
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});