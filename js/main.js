let coords = 0;

$('#right').click(() => {
    let box = $('.grid');

    coords -= 400;
    if (coords <= -1200) {
        coords = -800;
    }

    box.css('left', coords);
});

$('#left').click(() => {
    let box = $('.grid');

    coords += 400;

    if (coords >= 0) {
        coords = 0;
    }

    box.css('left', coords);
});