import {Component, input} from '@angular/core';

@Component({
  selector: 'gb-section',
  imports: [],
  templateUrl: './section.html',
  styleUrl: './section.css',
})
export class Section {
  variant = input<'light' | 'dark'>('light');
}
