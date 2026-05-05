function pause() {
    if (document.getElementsByClassName('scrolling').length!=0) {
        let animated = document.getElementsByClassName('scrolling');
        for (i = animated.length - 1; i >= 0; i--) {
            animated[i].classList.replace('scrolling', 'paused');
        }
        document.getElementById('pause-btn').innerHTML='<img src="images/play.svg" alt="play icon">';
    }
    else {
        let paused = document.getElementsByClassName('paused');
        console.log(paused);
        for (i = paused.length - 1; i>=0; i--){
            paused[i].classList.replace('paused', 'scrolling')
        }
        document.getElementById('pause-btn').innerHTML='<img src="images/pause.svg" alt="pause icon">';
    }
}