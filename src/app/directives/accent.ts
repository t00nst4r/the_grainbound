import { Directive } from '@angular/core';

@Directive({
  selector: '[gbAccent]',
  standalone: true,
  host: {
    'class': 'text-brand-primary font-semibold'
  }
})
export class AccentDirective {

  constructor() { }

}
