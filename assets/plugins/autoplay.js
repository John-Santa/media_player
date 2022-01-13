function AutoPlay() {}

AutoPlay.prototype.run = function(player) {
    player.mute();
    player.media.autoplay = true;
}

export default AutoPlay;