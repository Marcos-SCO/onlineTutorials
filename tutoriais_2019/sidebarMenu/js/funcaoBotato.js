//Função para botão 
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('#topBtn').fadeIn();
        } else{
            $('#topBtn').fadeOut();
        }
    });
    $("#topBtn").click(function(){
       $('html ,body').animate({scrollTop : 0},200); 
    });
});

$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('nav').addClass('preto');
    }
    else{
        $('nav').removeClass('preto');
    }
});