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


let x = 0;
let rainbow = ['red', 'orange', 'yellow', 'lime', 'blue', 'purple'];

$('#b-3').click(() => {
    $('button').css('background-color',rainbow[x % 6]);
    x++;
})