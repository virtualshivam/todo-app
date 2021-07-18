$(document).ready(function(){

$('img').click(function(){
    $('html').toggleClass('light');
    if($('img').attr('src')=='images/icon-sun.svg'){
        $('img').attr('src','images/icon-moon.svg')
    }else{
        $('img').attr('src','images/icon-sun.svg')
    }
})

  });