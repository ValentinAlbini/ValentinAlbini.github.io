let current_pic = 0;
let last_pic = 1;

let imagesData = [
    {
        photo: `./imgs/Todi_KISS.png`,
        title: `KISS`,
        desription: `The KISS concert was awesome with this guys at Wien!`
    },
    {
        photo: `./imgs/MMX_emléklap.png`,
        title: `MMX WIN!`,
        desription: `Not as good as it should be, but it worths it.`
    },
    {
        photo: `./imgs/Pharaoh_3X100.png`,
        title: `PHARAOH!`,
        desription: `The best city builder game ever...`
    }
];

let loadPhoto = (photoNumber, hideNumber) => {
    $('#main_pic').attr('src', imagesData[photoNumber].photo);
    $('#title').text(imagesData[photoNumber].title);
    $('#description').text(imagesData[photoNumber].desription);
    $(`.thumb_border:nth-child(${photoNumber+1})`).toggleClass('picked');
    $(`.thumb_border:nth-child(${hideNumber+1})`).toggleClass('picked');
    // $(`.thumb_border:nth-child(${photoNumber+1}) .tri`).css('visibility','visible');
    // $(`.thumb_border:nth-child(${hideNumber+1}) .tri`).css('visibility','hidden');
  }

let i=0;
imagesData.forEach(data => {
    $('#thumb_cont').append(`
    <div class='thumb_border'>
        <div class='thumb'>
            <img src="${data.photo}" class='thumb_img' data_numb='${i}'>
        </div>
        <div class='box_shadow'></div>
        <div class='tri2'></div>
        <div class='tri'></div>
        <div class='bubble'>${data.title}</div>
    </div>
    `)
    i++;
});

$('#right').click(() => {
    last_pic = current_pic;
    if (current_pic === imagesData.length-1) {
        current_pic = 0;
    } else {
    current_pic++;
    }
    loadPhoto(current_pic, last_pic);
})

$('#left').click(() => {
    last_pic = current_pic;
    if (current_pic === 0) {
        current_pic = imagesData.length-1;
    } else {
    current_pic--;
    }
    loadPhoto(current_pic, last_pic);
})

let current_data_numb;
$('.thumb_img').click((event) => {
    last_pic = current_pic;
    current_data_numb = $(event.target).attr('data_numb');
    current_pic = parseInt(current_data_numb);
    loadPhoto(current_pic, last_pic);
})

$(`.thumb_border:nth-child(2)`).toggleClass('picked');
loadPhoto(current_pic, last_pic);

