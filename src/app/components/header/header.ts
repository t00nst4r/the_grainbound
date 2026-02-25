import {Component, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {ButtonSealDirective} from '../../directives/button-seal';

@Component({
  selector: 'gb-header',
  imports: [
    RouterLink,
    RouterLinkActive,
    ButtonSealDirective
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }
}
