import { Directive } from '@angular/core';

@Directive({
  selector: '[gbDivider]',
  host: {
    'class': 'border-0 h-px bg-gradient-to-r from-transparent via-(--color-ink-muted)/40 to-transparent my-12'
  }
})
export class Divider {

  constructor() { }

}
