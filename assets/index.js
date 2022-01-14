import MediaPlayer from './mediaPlayer.js';
import AutoPlay from './plugins/autoplay.js';

const video = document.querySelector('video');
const playButton = document.querySelector('#play_pause');
const muteButon = document.querySelector('#unmute_mute');


const player = new MediaPlayer({el: video, plugins: [
    //new AutoPlay()
]});

playButton.onclick = () => player.togglePlay();
muteButon.onclick = () => player.mute();





