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


let section = document.querySelector('.information');
function inView (el) {
    var sb = section.getBoundingClientRect();
    var eb = el.getBoundingClientRect();
    return !((eb.top + eb.height < 0) || (eb.top > sb.height));
  }
  
  function updateInView() {
    for (x of document.querySelectorAll('.info')) {
      if (inView(x)) x.classList.add('inview')
      else x.classList.remove('inview');
    }
  }
  
  section.onscroll = updateInView;
  
  updateInView();