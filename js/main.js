function main() {
    var logo = document.querySelector('.logo__img');

    setTimeout(function() {
        //animate('.drops');
        logo.className = logo.className + ' bounce-in';

        //setTimeout(function() {
            animate('.nav');

            setTimeout(function() {
                //animate('.slogan');

                //setTimeout(function() {
                animate('.download');                
                //}, 120);
            }, 120);
        //}, 120);

    }, 0);
}

function animate(selector) {
    console.log(selector);
    var el = document.querySelector(selector);
    el.className = el.className + ' animated_in';
}

document.addEventListener('DOMContentLoaded', main);
