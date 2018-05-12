let coords = 0;

$('#right').click(() => {
    let box = $('.grid');
    // let wrapperWidth = $('.grid').css('width');
    // coords -= parseInt(wrapperWidth);

    if(coords -= 400 >= -1200) {
        coords -= 400;
    }

    if (coords < -1200) {
        coords = -2000+parseInt($('body').css('width'));
    }

    box.css('left', coords);
});

$('#left').click(() => {
    let box = $('.grid');

    if(parseInt($('body').css('width')) > 1200) {
        coords = 0;
    }
    coords += 400;


    if (coords >= 0) {
        coords = 0;
    }

    box.css('left', coords);
});