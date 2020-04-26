let actual_todo;

$('#add_button').click(() => {
    actual_todo = $('input').val();
    $('ul').append(`<li>${actual_todo}</li>`);
})

$('ul').click(() => {
    $('ul li:hover').css('text-decoration','line-through');
  });