import { trigger, state, style, animate, transition } from '@angular/animations';

export const flyInOut = () => {
  return trigger('flyInOut', [
    state('*', style({
      opacity: 1,
      transform: 'translateX(0)'
    })),
    transition(':enter', [
      style({ transform: 'translateY(-100%)', opacity: 0 }),
      animate('500ms ease-in')
    ]),
    transition(':leave', [
      animate('500ms ease-out'),
      style({ transform: 'translateY(100%)', opacity: 0 })
    ])
  ])
}