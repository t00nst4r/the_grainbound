import { Component } from '@angular/core';
import {FormField} from '../../components/form-field/form-field';
import {ButtonSealDirective} from '../../directives/button-seal';
import {TextDirective} from '../../directives/text';
import {Input} from '../../directives/input';
import {Section} from '../../components/section/section';

@Component({
  selector: 'gb-signup',
  imports: [
    FormField,
    ButtonSealDirective,
    TextDirective,
    Input,
    Section
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {

}
