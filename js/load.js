
const load_html = `<div class="wrapper">
  <div class="bd ball"></div>
  <div class="bd bar"></div>
  <div class="bg ball"></div>
  <div class="bg bar"></div>
  <div class="main ball"></div>
  <div class="main bar">
    <div class="water" id="load_meter"></div>
  </div>
</div>
`

window.onload = function () {
	console.log('start loading...');
	// initialize load screen
	(function () {
		let elm = document.getElementById('load');
		elm.innerHTML = load_html;
	})();
	
	setTimeout(function (){setLoadMeter(1)}, 500)
}

function setLoadMeter(rate) {
	// 0 <= rate <= 1
	let el = document.getElementById('load_meter');
	el.style.height = rate*100 + '%';
	
	if (rate >= 1) {
		setTimeout(function () {exitLoadScreen()}, 500);
	}
}

function exitLoadScreen() {
	let elm = document.getElementById("load");
	elm.classList.add('fadeout');
	setTimeout(function () { elm.remove(); }, 500);
}

(function () {
	// craete wrapper element
	let back_ball = document.createElement('div');
})();



