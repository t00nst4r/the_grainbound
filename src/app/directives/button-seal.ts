import {computed, Directive, input} from '@angular/core';
type BtnSize = 'sm' | 'md' | 'lg';
@Directive({
  selector: 'a[gbBtnSeal], button[gbBtnSeal]',
  standalone: true,
  host: {
    '[class]': 'classes()'
  }
})
export class ButtonSealDirective {
  size = input<BtnSize>('md');

  protected classes = computed(() => {
    const base = 'btn-base';
    const variant = 'btn-seal';
    const size = `btn-${this.size()}`;

    return `${base} ${variant} ${size}`;
  });
}
