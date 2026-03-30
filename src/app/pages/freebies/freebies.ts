import {Component, inject, signal} from '@angular/core';
import {Section} from '../../components/section/section';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
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
    this.errorMessage.set(null);

    const email = this.subscribeForm.value.email;

    try {
      // MOCK BACKEND CALL
      // In a real app, this would be: this.http.post('/api/subscribe', { email })
      await this.simulateBackendCall(email!);

      this.status.set('SUCCESS');
      this.subscribeForm.reset();
    } catch (err) {
      this.status.set('ERROR');
      this.errorMessage.set('The Archive is currently blocked. Please try again later.');
    }
  }

  /**
   * Simulates the logic of adding to a JSON "database"
   * and triggering an email with a unique key.
   */
  private simulateBackendCall(email: string): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`LOGIC: Adding ${email} to ledger.json`);

        // Generate a simple pseudo-UUID as the Access Key
        const accessKey = Math.random().toString(36).substring(2, 15);
        console.log(`LOGIC: Key Generated: ${accessKey}`);

        // Simulating the "Email Sent" trigger
        console.log(`MAILER: Sending key ${accessKey} to ${email}`);

        resolve();
      }, 1500);
    });
  }
}
