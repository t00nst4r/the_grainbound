import {Component, input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'gb-section',
  standalone: true,
  template: `
    <section [class]="theme()" class="w-full py-20 md:py-32 px-6 flex justify-center">
      <div [class]="containerClasses()">
        <ng-content></ng-content>
      </div>
    </section>
  `
})
export class Section {
  theme = input<'parchment' | 'studio' | 'sand'| 'moss' | 'ink'>('parchment');
  // Use this to trigger the 8/12 narrow layout
  isProse = input<boolean>(false);

  containerClasses = () => {
    return this.isProse()
      ? 'w-full lg:w-8/12 max-w-5xl mx-auto'
      : 'w-full mx-auto';
  };
}
