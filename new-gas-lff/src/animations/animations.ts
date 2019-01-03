import {
  trigger, transition, animate, style, state,
} from '@angular/animations';

export const SlideInStates = {
  LEFT_IN:'leftIn',
  LEFT_OUT:'leftOut',
  RIGHT_IN:'rightIn',
  RIGHT_OUT:'rightOut',
  ACTIVE:'active',
  NOT_ACTIVE:'notActive'
};

export const SlideIn = trigger('slideIn', [
  state(SlideInStates.LEFT_IN, style({top: 0, display: 'block', marginLeft: '100%', zIndex: 5})),
  state(SlideInStates.LEFT_OUT, style({top: 0, display: 'block', marginLeft: '0',zIndex: 1})),

  state(SlideInStates.RIGHT_IN, style({top: 0, display: 'block', marginLeft: '-100%', zIndex: 5})),
  state(SlideInStates.RIGHT_OUT, style({top: 0, display: 'block', marginLeft: '0',zIndex: 1})),

  state(SlideInStates.ACTIVE, style({top: 0, display: 'block', marginLeft: '0', zIndex: 5})),
  state(SlideInStates.NOT_ACTIVE, style({display: 'none'})),


  transition('leftIn => active', [
    animate('0.4s ease-in', style({ marginLeft: '0', top: 0, display: 'block', zIndex: 5 })),
    animate(200)
  ]),

  transition('rightIn => active', [
    animate('0.4s ease-in', style({ marginLeft: '0', display: 'block !important', zIndex: 5 })),
    animate(200)
  ]),

  transition('leftOut => notActive', [
    animate('1.6s ease-out', style({ display: 'none', top: 0, marginLeft: '-100%', zIndex: 0 })),
    animate(200)
  ]),

  transition('rightOut => notActive', [
    animate('1.6s ease-out', style({ marginLeft: '100%', zIndex: 0 })),
    animate(200)
  ]),

]);

