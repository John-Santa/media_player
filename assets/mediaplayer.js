/***
 * Play/Pause
 * Este botón se encarga de reproducir o pausar el video
 * el metodo play() y pause() son propios de los elementos del dom
 * que son llamados desde el botón
 * play() -> Reproduce el video
 * pause() -> Pausa el video
 */
function MediaPlayer(config){
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function(){
    this.plugins.forEach(plugin => {
        plugin.run(this);
    });
}

MediaPlayer.prototype.play = function(){
    this.media.play();
}

MediaPlayer.prototype.pause = function(){
    this.media.pause();
}

MediaPlayer.prototype.mute = function(){
    this.media.muted ? this.media.muted = false : this.media.muted = true;
}

/**
 * Eventos
 * Los eventos son propios de los elementos del DOM
 * Los eventos son llamados desde el botón
 * onclick -> Se ejecuta cuando se hace click en el botón
*/
MediaPlayer.prototype.togglePlay = function () {
    if(this.media.paused){
        this.play();
    }else{
        this.pause();
    }
}

export default MediaPlayer;