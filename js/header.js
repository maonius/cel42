
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

  // initialize icon
  let a = document.createElement('a');
  a.href = "../home/index.html";
  a.classList.add('icon');
  let img = document.createElement('img');
  img.src = "../img/cel42_icon_tp.png";
  a.appendChild(img);
  header.appendChild(a);
  
  // initialize items
  for (let d of dat) {
    let a = document.createElement('a');
    a.href = d.href;
    a.classList.add('item');
    d.txt[0] = d.txt[0].toUpperCase();
    a.innerHTML = d.txt;
    //let img = document.createElement('img');
    //img.src = `../img/${d.txt}.png`;
    //a.appendChild(img);
    header.appendChild(a);
  }

  console.log("inisialized header!");
})();

