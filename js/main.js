function main() {
  var logo = document.querySelector('.logo__img');

  setTimeout(function() {
    //animate('.drops');
    if (logo) {
      logo.className = logo.className + ' bounce-in';
    }

    //setTimeout(function() {
    animate('.home-page .nav');
    setTimeout(function() {
      //animate('.slogan');
      //setTimeout(function() {
      animate('.download');                
      //}, 120);
    }, 120);
    //}, 120);

  }, 0);

  // Set the size of the rendered Emojis
  // This can be set to 16x16, 36x36, or 72x72
  twemoji.size = '36x36';

  // Parse the document body and
  // insert <img> tags in place of Unicode Emojis
  twemoji.parse(document.body);
}

function animate(selector) {
    var el = document.querySelector(selector);
    if (!el) return;
    el.className = el.className + ' animated_in';
}

document.addEventListener('DOMContentLoaded', main);
