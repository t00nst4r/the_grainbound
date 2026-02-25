import { Component } from '@angular/core';
import {TextDirective} from '../../directives/text';
import {Section} from '../../components/section/section';
import {Card} from '../../components/card/card';
import {AccentDirective} from '../../directives/accent';
import {FormField} from '../../components/form-field/form-field';
import {Input} from '../../directives/input';
import {ButtonSealDirective} from '../../directives/button-seal';
import {Badge} from '../../directives/badge';

@Component({
  selector: 'gb-test',
  imports: [
    TextDirective,
    Section,
    Card,
    AccentDirective,
    FormField,
    Input,
    ButtonSealDirective,
    Badge
  ],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test {

}
