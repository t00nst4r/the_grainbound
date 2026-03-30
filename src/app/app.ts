import { Component, signal } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {Header} from './components/header/header';
import {Footer} from './components/footer/footer';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Footer,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
