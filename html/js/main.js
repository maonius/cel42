
window.addEventListener('load', function () {
  let elms = document.getElementsByClassName("dummy_text");
  let txt = "";
  for (let i=0; i<20; i++) txt += "摂氏42℃ですよろしくおねがいします！"
  for (let i=0; i<elms.length; i++) {
    let el = elms[i];
    el.innerHTML = txt;
  }
});


