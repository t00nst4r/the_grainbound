import {Component, input} from '@angular/core';
import {TextDirective} from '../../directives/text';

@Component({
  selector: 'gb-form-field',
  imports: [
    TextDirective
  ],
  templateUrl: './form-field.html',
  styleUrl: './form-field.css',
})
export class FormField {
  forId = input<string>('');
  error = input<string | null>(null);
}
