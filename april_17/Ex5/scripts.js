$('#b-1').click(() => {
    console.log('Yeah, you clicked me');
})


let button_text= 'BUTTON';

$('#b-2').click(() => {
    if (button_text === 'BUTTON') {
        button_text = 'Yeah!';
    } else {
        button_text = 'BUTTON';
    }
    $('#b-1').text(button_text);
});


let input_color;
let first = true;
$('#b-3').click(() => {
    if (first) {
    input_color = $('input').val();
    $('button').css('background-color',input_color);
    first = false;
    }
})