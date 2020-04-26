let names = ['Cliff Burton','Ronnie James DIO','Jimi Hendrix',
'Jeff Hanneman','Albini Valentin', 'Sir Shristopher Lee'];

names.forEach(name => {
    $('ul').append(`<li class='names'>${name}</li>`);
    if (name === 'Albini Valentin') {
        $('.names:last-child').css('font-weight','bold');
    }
});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

  $('main').append(`<h3>${additionalBlock.title}</h3>`)
  $('main').append(`<p>${additionalBlock.text}</p>`)