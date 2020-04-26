let name = 'Akela';

console.log(`Hello, my dear ${name}`);

// jQuery part
$('p').text('The jQuery part has started!');
$('p').html('The <strong> jQuery </strong> part has started!');

$('h1').css('background','red');

$('h2').toggleClass('green');
$('p').toggleClass('green');
$('p').toggleClass('green');

$('main').append('<p id="first">Added Element</p>');
//$('main').append('<p>Added secont Element</p>');
$('#first').remove();

// How to use Buttons

$('#add-button').click(() => {
    if ($('main p').length < 5) {
    $('main').append(`<p>Username: ${$('#name').val()}</p>`);
    }else {
        $('main').append(`<p class='green'>Added new p tag</p>`);
    }
});

let removeFunction = () => {
    $('main p:last-child').remove();
}
$('#remove-button').click(removeFunction);

// Conditions and loops

let age = 26;

if (age >= 18)  { // === !==
    console.log('This person can drink!')
} else {
    console.log('This is a kid, no alcohol...')
}

//loops

//$('main').append(`<div class='box'></div>`);
//$('main div:last-child').css('background','orange');

let colors = ['red', 'orange', 'yellow', 'lime', 'blue' ,'purple'];
colors.push('magenta');

colors.forEach((color) => {
    $('main').append(`<div class='box'></div>`);
    $('main div:last-child').css('background',color);
});

for(let i = 0; i < 100; i++) {
    console.log('Current number: '+ i);
};