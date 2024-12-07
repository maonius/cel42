(function () {
	const footer_html = `
      <div></div>
      <div class="links">
        <a href="https://www.youtube.com/channel/UCzEIIFIBRoGYhCg6CDbxggA">
          <i class="fa-brands fa-youtube"></i></a>
        <a href="https://x.com/sessi42do?s=21&t=7qadfMP_recidrA0ftF9UA">
          <i class="fa-brands fa-x-twitter"></i></a>
      </div>
      <img class="logo" src="../img/cel42_icon_shadow.png">
      <div class="copyright">&copy; 42 Degree Celsius</div>
  `
	let elm = document.getElementById('footer');
	elm.innerHTML = footer_html;
})();