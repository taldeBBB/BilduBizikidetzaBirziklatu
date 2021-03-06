var user_acepted_policies = localStorage.getItem("aceptPolicies");
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
          localStorage.setItem("aceptPolicies", "true");
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
  } else {
    $(".policy-filling-background").hide();
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
