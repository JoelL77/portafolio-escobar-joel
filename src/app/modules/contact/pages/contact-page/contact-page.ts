import { Component, inject, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import emailjs from '@emailjs/browser';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'app-contact-page',
  imports: [ButtonModule, InputTextModule, TextareaModule, ReactiveFormsModule],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {
  private fb = inject(FormBuilder);

  sending = signal(false);

  contactForm = this.fb.group({
    name: ['', Validators.required],

    email: ['', [Validators.required, Validators.email]],

    subject: ['', Validators.required],

    phone: [''],

    message: ['', [Validators.required, Validators.minLength(20)]],
  });

  async sendEmail() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.sending.set(true);

    try {
      await emailjs.send(
        environment.emailServiceId,

        environment.emailTemplateId,

        this.contactForm.value,

        {
          publicKey: environment.emailPublicKey,
        },
      );

      alert('Mensaje enviado correctamente 🚀');

      this.contactForm.reset();
    } catch (error) {
      console.error(error);

      alert('Error enviando mensaje');
    }

    this.sending.set(false);
  }
}
