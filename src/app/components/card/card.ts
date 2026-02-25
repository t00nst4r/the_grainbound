import {Component, computed, input} from '@angular/core';

@Component({
  selector: 'gb-card',
  standalone: true,
  template: `
    <div [class]="cardClasses()">
      <ng-content></ng-content>
    </div>
  `
})
export class Card {
  variant = input<'glass' | 'solid' | 'dark'>('glass');

  protected cardClasses = computed(() => {
    // Combine the base card class with the specific variant class
    return `gb-card gb-card-${this.variant()}`;
  });
}
