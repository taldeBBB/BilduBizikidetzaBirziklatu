$(document).ready(function () {
  // Recoger todos los elementos de la clase y guardarlos en variable
  var images = $(".galery-content-item");

  // Poner el primer elemento de filtros (Todos) por defecto con la clase selected
  $("#contenedor-galeria-filtros>ul>a:nth-child(1)").addClass("selected");

  // Cuando se le haga click a un filtro
  $("#contenedor-galeria-filtros>ul>div>a").click(function (e) {
    // Guardamos el evento de click como 'e' y le decimos que no haga lo que suele hacer, ya que solo queremos la funcionalidad del click, no queremos que nos lleve a un sitio

    e.preventDefault();
    if ($("#contenedor-galeria-contenido > ul").children().length > 1) {
      // Los hermanos del que le haya hecho click (mismo nivel / tag no estoy seguro), quitar la clase selected
      $(this).siblings().removeClass("selected");

      // A el elemento clickado añadir clase selected
      $(this).addClass("selected");

      // Recoger el filtro que queremos aplicar del elemento que hemos clickado
      var filter = $(this).data("filter");

      // A todas las imagenes
      // .stop() : para la animacion actual (por si se hace muchos clicks para que no se quede en bucle)
      // .hide() : esconde todo
      // .filter() : dame solo lo que quiero, si filter all enseña todas, si no, devuelveme aquellas images que cat === filter
      // .fadeIn() : muestra solo los elementos que has sacado del filter
      images
        .stop()
        .hide()
        .filter(function () {
          if (filter === "all") {
            images.fadeIn(1000);
          } else {
            return $(this).data("cat") === filter;
          }
        })
        .fadeIn(1000);
    }
  });

  $(".galery-content-item").each(function (i, obj) {
    if ($(this).css("background-image") == "none") {
      $(this)
        .children("a")
        .children("p")
        .html(
          "Añadiremos las quedadas realizadas próximamente, ¡acuerdate de echarle un ojo de vez en cuando!"
        );
      if ($("#contenedor-galeria-contenido > ul").children().length > 1) {
        $(this).remove();
      } else if (
        $("#contenedor-galeria-contenido > ul").children().length == 1
      ) {
        var save = $(this).children("a").children("p");
        $(this).remove();
        $("#contenedor-galeria-contenido > ul").append(save);
        save.css({
          margin: "0",
          width: "100vw",
          "border-radius": "0",
          "text-align": "center",
          cursor: "default",
        });
        save.addClass("boton-verde");
      }
      $(this)
        .children("a")
        .click(function (e) {
          e.preventDefault();
        });
    }
  });
});
