$(document).ready(function () {
  $("#navigation>li>a:not(:first)").click(function (e) {
    e.preventDefault();
  });
  $("#navigation-submenu>li>a").click(function (e) {
    e.preventDefault();
  });
  $("#header-haz-donacion").click(function (e) {
    e.preventDefault();
  });
});
