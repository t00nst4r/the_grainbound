import {Component, inject, signal} from '@angular/core';
import {Section} from '../../components/section/section';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {FreebiesService} from '../../services/freebies.service';
import {lastValueFrom} from 'rxjs';
// Define our submission states
type FormStatus = 'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR';
@Component({
  selector: 'gb-freebies',
  imports: [
    Section,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './freebies.html',
  styleUrl: './freebies.css',
})
export class Freebies {
  private fb = inject(FormBuilder);
  private freebiesService = inject(FreebiesService);

  // State management using Signals
  status = signal<FormStatus>('IDLE');
  errorMessage = signal<string | null>(null);

  subscribeForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]]
  });

  async onSubmit() {
    if (this.subscribeForm.invalid) {
      this.subscribeForm.markAllAsTouched();
      return;
    }

    this.status.set('LOADING');

    this.status.set('LOADING');
    this.errorMessage.set(null);

    const email = this.subscribeForm.value.email;
    const name = this.subscribeForm.value.name;

    try {
      // The component only cares that it WORKED, not HOW the HTTP worked
      await lastValueFrom(this.freebiesService.subscribeToFreebies(email!, name!));
      this.status.set('SUCCESS');
    } catch (err: any) {
      this.status.set('ERROR');
      this.errorMessage.set(err.message);
    }
  }
}
