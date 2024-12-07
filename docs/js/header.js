/*
  header
  > a(logo)
    > img
  > input(for accordion)
  > label(humberger)
    > bar
    > bar
    > bar
    > div(bg)
  > nav(items)
    > a
    > a
    ...
    > a
*/

(function (){
  console.log('initializing header...');
  const dat = [
    {"href": "../information/index.html", "txt": "information"},
    {"href": "../schedule/index.html", "txt": "schedule"},
    {"href": "../profile/index.html", "txt": "profile"},
    {"href": "../discography/index.html", "txt": "discography"},
    {"href": "../blog/index.html", "txt": "blog"}
  ];
  let header = document.getElementById("header");

  // initialize logo-image
  let a = document.createElement('a');
  a.href = "../home/index.html";
  a.classList.add('logo');
  let img = document.createElement('img');
  img.src = "../img/cel42_logo.png";
  a.appendChild(img);
  header.appendChild(a);
  
  // initialize input
  let input = document.createElement('input');
  input.type = 'checkbox';
  input.id   = 'humburger';
  header.appendChild(input);
  
  // initialize humburger menu
  let humburger = document.createElement('label');
  humburger.setAttribute('for', 'humburger');
  humburger.classList.add('humburger');
  header.appendChild(humburger);
  for (let i=0; i<3; i++) {
    let bar = document.createElement('div');
    bar.classList.add('bar');
    humburger.appendChild(bar);
  }
  let bg = document.createElement('div');
  bg.classList.add('bg');
  humburger.appendChild(bg);
  
  // initialize nav
  let nav = document.createElement('nav');
  nav.classList.add('nav');
  header.appendChild(nav);
  
  // initialize items
  for (let d of dat) {
    let a = document.createElement('a');
    a.href = d.href;
    a.classList.add('item');
    d.txt[0] = d.txt[0].toUpperCase();
    a.innerHTML = d.txt;
    nav.appendChild(a);
  }

  console.log("inisialized header!");
})();

