function main() {
  var logo = document.querySelector('.logo__img'),
    nav = document.querySelector('.nav'),
    body = document.querySelector('body'),
    isHome = false;

  if (hasClass(body, 'home-page')) {
    isHome = true;
  }

  if (isHome) {
    var logos = document.querySelectorAll('.logo__img'),
      i = 1;
    console.log(logos);
    setInterval(function() {
      if (i === 0) {
        removeClass(logos[logos.length - 1], 'logo__img_active');
      } else {
        removeClass(logos[i - 1], 'logo__img_active');
      }
      
      addClass(logos[i], 'logo__img_active');
      if (i === (logos.length - 1)) {
        i = 0;
      } else {
        i++;
      }
    }, 600);
  }

  setTimeout(function() {
    animate('.home-page .nav');
    setTimeout(function() {
      animate('.download');
    }, 120);
  }, 0);

  nav.addEventListener('mouseover', function() {
    if (nav.className.indexOf('nav_hovered') === -1) {
      nav.className = nav.className + ' ' + 'nav_hovered';
    } 
  })

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

function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className)
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}

document.addEventListener('DOMContentLoaded', main);
