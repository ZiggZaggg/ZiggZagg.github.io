
dataImages = [
    {photo: 'Web Images/PMOD.jpg', title: 'Mudshadow Propaganda', description: 'Princes 2018 EP hits the sweet spot with some funky, tribal ooze'},
    {photo: 'Web Images/Nobu folla.jpg', title: 'Nobu Folla', description: 'The Japanese master of chaotic, mind-boggling frequencies presents Folla'},
    {photo: 'Web Images/original.jpg', title: 'Decay', description: 'Efdemin releases an instant classic, soothing train tracks'}
];

let currentPhoto = 0;


let loadPhoto = (photoNumber) => {
    $('#image').attr('src', dataImages[photoNumber].photo);
    $('#image_title').html(dataImages[photoNumber].title);
    $('#image_description').html(dataImages[photoNumber].description);
};

loadPhoto(currentPhoto);

$('#right_arrow').click(() => {
    if (currentPhoto >= 0 && currentPhoto < 2) {
        currentPhoto++;
        loadPhoto(currentPhoto);
    };
});

$('#left_arrow').click(() => {
    if (currentPhoto > 0 && currentPhoto <= 2) {
        currentPhoto--;
        loadPhoto(currentPhoto);
    };
});

//adding thumbnail with forEach method:

dataImages.forEach((item, index) => {
    //adding thumbnail <div> to thumbnail container
    $('.thumbnail_container').append(`<div class="thumbnail"></div>`);
    //adding photo into thumbnail <div>
    $(`.thumbnail:nth-child(${index + 1})`).append(`<img src="${item.photo}" data-index="${index}" class="thumbnail_image"></img>`);
    //attaching title container to thumbnail <div> with <p> title of photo in it
    $(`.thumbnail:nth-child(${index + 1})`).prepend(`<div class="title_container"><span class="title">${item.title}</span></div>`);
    //adding click event method to thumbnail <img> 
    $('.thumbnail_image').click(event => {
        let indexClicked = $(event.target).attr('data-index');
        loadPhoto(indexClicked);
    });

});










