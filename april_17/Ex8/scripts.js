let actual_todo;

$('#add_button').click(() => {
    actual_todo = $('input').val();
    if (actual_todo !== '') {
     $('ul').append(`
     <div class='todo_container'>
         <p class='todo'>${actual_todo}</p>
         <img src='./icons/bin.svg' class='bin'></img>
         <img src="./icons/unchecked.svg" class='check'></img>
     </div>
     `); }

    $('input').val('');


    $('.bin').click(() => {
        $('ul div:hover').remove();
    });

    $('.check').click(() => {
        if ($('img:hover').attr('src') === './icons/unchecked.svg') {
        console.log('be');
        $('ul div:hover').css('color','lightgrey');
        $('img:hover').attr('src','./icons/checked.svg');
        }
        //  else {
        // $('ul div:hover').css('color','grey');
        // $('img:hover').attr('src','./icons/unchecked.svg');
        // console.log('ki');
        // }
    })

})