import { Directive } from '@angular/core';

@Directive({
  selector: 'a[gbBtnLeather], button[gbBtnLeather]',
  standalone: true,
  host: {
    'class': `
      inline-block text-center uppercase tracking-widest font-display
      bg-(--color-surface-dark) text-(--color-ink-light) border border-(--color-ink-muted)/30
      px-8 py-3 rounded-(--radius-seal)
      transition-all duration-(--transition-standard)

      /* The Interaction */
      hover:bg-(--color-surface-dark-alt)
      hover:border-(--color-brand-primary)/60
      hover:-translate-y-0.5
      hover:shadow-(--shadow-hover)

      active:translate-y-0
      focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-surface-dark)
      cursor-pointer
    `
  }
})
export class ButtonLeatherDirective {

  constructor() { }

}
