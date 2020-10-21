window.addEventListener('scroll', function(e) {

    const target = document.querySelectorAll('.scroll');


    var index = 0, length = target.length;
    for (index; index < length; index++) {
        var pos = window.pageYOffset * target[index].dataset.rate;

        if(target[index].dataset.direction === 'vertical') {
            target[index].style.transform = 'translate3d(0px,'+pos+'px, 0px)';
        } else {
            var posX = window.pageYOffset * target[index].dataset.ratex;
            var posY = window.pageYOffset * target[index].dataset.ratey;
            
            target[index].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)';
        }
    }
});


const articles = document.querySelectorAll('.item');

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

articles.forEach(article => {
  observer.observe(article);
});