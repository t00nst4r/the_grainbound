import {Component, HostListener, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'gb-header',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  public isSticky = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Toggle sticky state when scrolled more than 100px
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log(scrollOffset)
    this.isSticky.set(scrollOffset > 100);
  }
}
