$(document).ready(function(){
    let incomplete = true;

    $('.task-status').click(function(){
        if(incomplete){
            console.log($(this.children[0]))

            $(this.children[0]).css('background','linear-gradient( hsl(192, 100%, 67%),hsl(280, 87%, 65%))');
            // $('.inner i').show()

            incomplete=false
        }
    })

})