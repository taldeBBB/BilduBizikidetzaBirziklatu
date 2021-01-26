var user_acepted_policies = getCookie("aceptPolicies");
var disableClick = false;

$(document).ready(function () {
  if (user_acepted_policies != "true") {
    setTimeout(function () {
      $("#acceptPolicyModal").fadeIn();
      if ($("#acceptPolicyModal").css("display") != "none") {
        disableScroll();
        $("html").css({ overflow: "hidden" });
      }
      $(".policy-filling-background").css({
        "background-color": "rgba(255,255,255,0.60)",
      });
    }, 2000);

    $("#policy-agree").click(function () {
      if (disableClick) {
        return;
      } else {
        disableClick = true;
        var checkCookies =
          $('input[name="modalPoliticaCookies"]:checked').length > 0;
        var checkDatos =
          $('input[name="modalPoliticaDatos"]:checked').length > 0;
        if (checkCookies && checkDatos) {
          $("#acceptPolicyModal").fadeOut();
          $(".policy-filling-background").hide();
          $("html").css({ "overflow-y": "scroll" });
          enableScroll();
          setCookie("aceptPolicies", "true", 30);
        } else {
          $("#policy-agree")
            .addClass("boton-rojo")
            .effect("shake", { times: 4, distance: 50 }, 650)
            .delay(1200)
            .queue(function (next) {
              $(this).removeClass("boton-rojo");
              disableClick = false;
              next();
            });

          $('.policy-modal-content form input[type="checkbox"]')
            .addClass("not-agreed")
            .effect("shake", { times: 4, distance: 5 }, 650)
            .delay(1200)
            .queue(function (next) {
              $(this).removeClass("not-agreed");
              disableClick = false;
              next();
            });
        }
      }
    });
  }
});

function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  };
}

function enableScroll() {
  window.onscroll = function () {};
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
