function main() {
  var logo = document.querySelector('.logo__img'),
    nav = document.querySelector('.nav'),
    body = document.querySelector('body'),
    isHome = hasClass(body, 'home-page');
  
  if (isHome) {
    var logos = document.querySelectorAll('.logo__img'),
      i = 1;

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

  nav.addEventListener('mouseenter', function() {
      addClass(nav, 'nav_hovered');
  });

  nav.addEventListener('mouseleave', function() {
      removeClass(nav, 'nav_hovered');
  });

  twemoji.parse(document.body);

  if (window.innerWidth < 768) {
    document.querySelector('.nav__li_has-dropdown .nav__link')
      .addEventListener('click', function(e) {
        e.preventDefault();
        var el = e.currentTarget.parentNode;
        if (hasClass(el, 'nav__li_has-dropdown_active')) {
          removeClass(el, 'nav__li_has-dropdown_active');
        } else {
          addClass(el, 'nav__li_has-dropdown_active');
        }
      });
  }
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
