
(function () {
	// search events
	let pElm = document.getElementById('schedule');
	for (let i=0; i<events_data.length; i++) {
		let eve = events_data[i];
		if (eve.type == "live" || eve.type == "event") {
			// create event element
			let article = document.getElementById('article');
			let icon = document.getElementById('img');
			let type = document.getElementById('div');
			let date = document.getElementById('div');
			let title = document.getElementById('div');
			let detail = document.getElementById('div');
			// set attributes
			// create tree
			article.appendChild(icon);
			article.appendChild(type);
			article.appendChild(date);
			article.appendChild(title);
			pElm.appendChild(article);
		}
	}
})();
