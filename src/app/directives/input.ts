import { Directive } from '@angular/core';

@Directive({
  selector: 'input[gbInput], textarea[gbInput]',
  standalone: true,
  host: {
    'class': `
      w-full px-4 py-3 rounded-sm transition-all duration-200
      bg-(--color-input-bg) border border-(--color-input-border)
      font-serif text-(--text-base) text-(--color-ink-dark)
      placeholder:text-(--color-ink-muted)/50

      /* Focus States */
      focus:outline-none focus:border-(--color-input-focus) focus:ring-4 focus:ring-(--color-brand-primary)/10

      /* Disabled State */
      disabled:opacity-50 disabled:cursor-not-allowed
    `
  }
})
export class Input {

  constructor() { }

}
