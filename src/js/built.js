import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const scroller = document.querySelector('.hero__scroller');
const listItem = document.querySelectorAll('.hero__list-item');

gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
  scrollTrigger: {
    trigger  : '.hero__container',
    markers  : false,
    start    : 'top center',
    end      : 'top top',
    onToggle : () => {
      scroller.classList.toggle('will-change');
    },
    scrub: true
  }
})
  .to('.hero__title', { scale: 1.5, duration: 2 })
  .to('.hero__title', { autoAlpha: 0.1, duration: 1 }, '-=.5');

gsap.timeline({
  scrollTrigger: {
    trigger  : '.hero__container',
    start    : 'top top',
    scrub    : true,
    end      : `+=${listItem.length}000`,
    onToggle : () => {
      scroller.classList.toggle('will-change');
    },
    onEnter: () => {
      scroller.removeAttribute('style');
    },
    onEnterBack: () => {
      scroller.removeAttribute('style');
    },
    onLeave: () => {
      scroller.style.zIndex = '-1';
    }
  }
})
  .to('.hero__title', { scale: 1.4, duration: 4 })
  .to('.hero__title', { autoAlpha: 0, duration: 1 }, '-=1');

const list = gsap.timeline({
  scrollTrigger: {
    trigger  : '.hero__list',
    markers  : false,
    pin      : true,
    start    : 'top top',
    end      : `+=${listItem.length}000`,
    onToggle : (cb) => {
      cb.trigger.classList.toggle('will-change');
    },
    scrub: true
  }
});

[].slice.call(listItem).forEach((item) => {
  list.to(item, { autoAlpha: 1, y: 0, duration: 1 });
  list.to(item, { y: -30, duration: 2 });
  list.to(item, { autoAlpha: 0, y: -60, duration: 1 });
});

// Board.
const board = document.querySelector('.section-board');
const main  = document.querySelector('.section-dark');
const rates = main.querySelector('.board__ratings');

gsap.timeline({
  scrollTrigger: {
    markers     : false,
    trigger     : board,
    start       : 'top bottom',
    end         : 'top top',
    scrub       : true,
    onEnter     : () => main.classList.remove('section-dark'),
    onLeaveBack : () => main.classList.add('section-dark'),
  }
}).to(main, { backgroundColor: 'white' });



const revealBoard = gsap.timeline({
  scrollTrigger: {
    markers     : false,
    trigger     : board,
    start       : 'top center',
    end         : '+=300',
    scrub       : true,
    onLeave     : () => rates.classList.remove('will-change'),
    onLeaveBack : () => rates.classList.add('will-change'),
    onToggle    : (cb) => {
      cb.trigger.classList.toggle('will-change');
      rates.classList.add('will-change');
    }
  }
});

revealBoard
  .to('.board__excerpt-logo', { autoAlpha: 1, y: 0, duration: 1 })
  .to('.board__excerpt-title', { autoAlpha: 1, y: 0, duration: 1 }, '-=.75')
  .to('.board__excerpt-desc', { autoAlpha: 1, y: 0, duration: 1 }, '-=.75');

