swal("plagin")
$(document).ready(function(){
    $("#submit").click(function(){
        let a = $("#name").val()
        let b = $("#email").val()
        let c = $("#message").val()
        swal(`Вас зовут ${a}\n
        Ваш эмайл ${b}\n
        Ваше сообщение${c}\n`)
    })
    $(".whatidotext").hover(function(){
        a = $(this).css("color")
        swal(a)
    })
    $(".square").click(function(){
        $("#lsd").hide()
    })
    $(".square").dblclick(function(){
        $("#lsd").show()
    })
    $(".aboutmehead").click(function(){
        $(".aboutmetext").fadeOut()
    })
    $(".aboutmehead").dblclick(function(){
        $(".aboutmetext").fadeIn()
    })
    $(".kartinki").click(function(){
        $(this).remove()
    })
    $("#uxui").click(function(){
        $(this).animate({left: '250px'});
    });
    $("#uxui").dblclick(function(){
        $(this).animate({left: '-250px'});
    });
    $(".expand").click(function(){
        $(this).prepend("!")
        $(this).append("!")
        $(this).before("%")
        $(this).after("%")
    })
})
$( function() {
    $( "#accordion" ).accordion();
  } );