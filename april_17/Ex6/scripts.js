let x = 0;

$('#inc').click(() => {
    x++;
    $('h2').text(x);
})

$('#dec').click(() => {
    x--;
    $('h2').text(x);
})