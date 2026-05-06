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

(function () {
	const headings = document.querySelectorAll('h2.special-h2');
	Array.prototype.forEach.call(headings, h => {
		let headbtn = h.querySelector('button');
		let target = h.nextElementSibling;
		headbtn.onclick = () => {
			let expanded = headbtn.getAttribute('aria-expanded') === 'true';
			headbtn.setAttribute('aria-expanded', !expanded);
			target.hidden = expanded;
		}
	});
})();