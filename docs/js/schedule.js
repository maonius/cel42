
(function () {
	// search events
	let pElm = document.getElementById('schedule');
	for (let i=0; i<events_data.length; i++) {
		let d = events_data[i];
		if (d.type == "live" || d.type == "event") {
			// create event element
			let article = document.createElement('label');
			let input   = document.createElement('input');
			let icon    = document.createElement('img');
			let type    = document.createElement('div');
			let date    = document.createElement('div');
			let title   = document.createElement('div');
			let detail  = document.createElement('div');
			// create data
			let id = 'article' + (i+1);
			// set attributes
			article.classList.add('article');
			article.classList.add(d.type);
			article.setAttribute('for', id);
			input.type = 'checkbox';
			input.classList.add('checkbox');
			input.id = id;
			icon.src = `../img/icon_${d.type}.png`;
			icon.classList.add('icon');
			type.classList.add('type');
			type.innerHTML = d.type;
			date.classList.add('date');
			date.innerHTML = d.date;
			title.classList.add('title');
			title.innerHTML = d.title;
			detail.classList.add('detail');
			detail.innerHTML = d.detail;
			
			// create tree
			article.appendChild(icon);
			article.appendChild(input);
			article.appendChild(type);
			article.appendChild(date);
			article.appendChild(title);
			article.appendChild(detail);
			pElm.appendChild(article);
		}
	}
})();
