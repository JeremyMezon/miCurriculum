$('a[href^="#"]').click(function() {
    var destino = $(this.hash);
    if (destino.length == 0) {
        destino = $('a[name="' + this.hash.substr(1) + '"]');
    }
    if (destino.length == 0) {
        destino = $('html');
    }
    $('html, body').animate({ scrollTop: destino.offset().top }, 100);
    return
})

$(function() {

  $(".progress").each(function() {

    var value = $(this).attr('data-value');
    var left = $(this).find('.progress-left .progress-bar');
    var right = $(this).find('.progress-right .progress-bar');

    if (value > 0) {
      if (value <= 50) {
        right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
      } else {
        right.css('transform', 'rotate(180deg)')
        left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
      }
    }

  })

  function percentageToDegrees(percentage) {

    return percentage / 100 * 360

  }

});

$('.circular').knob({
    "min":          0,
    "max":          100,
    "width":        100,
    "height":       100,
    "thickness":    .2,
    "fgColor":      "#2297DB",
    "readOnly":     true,
    "angleOffset": -125,
    "angleArc":     250,
})

$(document).ready(()=>{
  console.log($('#contacto').scrollTop())
})

/*$(window).scroll(()=>{
  if(($(this).scrollTop()+($('#contacto').height()/2)) > $('#contacto').offset().top){
      $(".menu").addClass("nav-blanco");
  }else{
      $('.menu').removeClass("nav-blanco");
  }
})*/

var identificador = "";

/*$('.menu a').hover((event)=>{
  console.log(event.target.getAttribute("href").toString());
  identificador = event.target.getAttribute("href").toString();
  animacionNavActivado(identificador);
},()=>{
  animacionNavDesactivado(identificador);
})*/

function animacionNavActivado(id){
  $(`[href="${id}"] div`).removeClass('d-none');
  $(`[href="${id}"] div`).addClass('texto-nav');
  $(`[href="${id}"]`).css({
      'height': `100px`,
      'margin': '20px auto',
      'border-color': 'white',
      'animation-name': 'fadeout',
      'animation-duration': '.05s'
  })
  console.log($('.text-nav').width());
}

function animacionNavDesactivado(id){
  $(`[href="${id}"]`).css({
          'height': `20px`,
          'margin': '5px auto',
          'border-color': '#2297DB',
          'animation-name': 'fadein',
          'animation-duration': '.1s'
      })
  $(`[href="${id}"] div`).addClass('d-none');
  $(`[href="${id}"] div`).removeClass('texto-nav');
}