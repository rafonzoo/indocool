import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const option = {
  markers : false,
  trigger : '.hero',
  pin     : true,
  start   : 'top top',
  end     : '+=5000',
  scrub   : true,
  onLeave : function() {
    document
      .querySelector('.hero-wrapper')
      .classList.remove('will-change');
  },
  onEnterBack: function() {
    document
      .querySelector('.hero-wrapper')
      .classList.add('will-change');
  }
};

ScrollTrigger.matchMedia({
  '(min-width: 992px)': function() {
    const tl = gsap.timeline({ scrollTrigger: option });

    tl.to('.hero-title', { autoAlpha: 1, duration: 2 });
    tl.to('.hero-title', { scale: 1.1, duration: 2 });
    tl.to('.hero-title', { autoAlpha: 0.05, duration: 1 });

    [].slice.call(document.querySelectorAll('.hero-list_item')).forEach((item) => {
      tl.to(item, { autoAlpha: 1, y: 0, duration: 1 });
      tl.to(item, { y: -60, duration: 5 });
      tl.to(item, { autoAlpha: 0, y: -90, duration: 1 });
    });

    tl.to('.hero-title', { scale: 1.1, autoAlpha: 1, duration: 1 });
    tl.to('.hero-title', { scale: 5, autoAlpha: 1, duration: 5 });
    tl.to('.hero-title', { scale: 10, autoAlpha: 0, duration: 2 });
    tl.to('.hero', { backgroundColor: '#fff', duration: 1 }, '-=.5');
    tl.to('.hero-title', { scale: 5, autoAlpha: 1, color: 'black', duration: 1 }, '-=.5');
    tl.to('.hero-title', { scale: .8, duration: 5 });
    tl.to('.hero-subtitle', { autoAlpha: 1, y: 0, duration: 1 }, '-=.75');
  },

  '(max-width: 991px)': function() {
    const tl = gsap.timeline({ scrollTrigger: { ...option, }, });

    tl.to('.hero-title', { autoAlpha: 1, duration: 2 });
    tl.to('.hero-title', { scale: 1.2, duration: 2 });
    tl.to('.hero-title', { autoAlpha: 0.05, duration: 1 });

    [].slice.call(document.querySelectorAll('.hero-list_item')).forEach((item) => {
      tl.to(item, { autoAlpha: 1, y: 0, duration: 1 });
      tl.to(item, { y: -30, duration: 5 });
      tl.to(item, { autoAlpha: 0, y: -60, duration: 1 });
    });

    tl.to('.hero-title', { scale: 1.2, autoAlpha: 1, duration: 1 });
    tl.to('.hero-title', { scale: 2.50, autoAlpha: 1, duration: 4 });
    tl.to('.hero-title', { scale: 5.00, autoAlpha: 0, duration: 2 });
    tl.to('.hero', { backgroundColor: '#fff', duration: 1 }, '-=.5');
    tl.to('.hero-title', { scale: 2.50, autoAlpha: 1, color: 'black', duration: 2 }, '-=.5');
    tl.to('.hero-title', { scale: 1, duration: 5 });
    tl.to('.hero-subtitle', { autoAlpha: 1, y: 0, duration: 1 }, '-=.75');
  }
});
