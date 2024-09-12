import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Message } from '../../pages/message-chat/message-chat.component';
import { Category } from '../../../../shared/components/side-navbar/side-navbar.component';
import { format } from 'date-fns';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-message-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './message-input.component.html',
  styleUrl: './message-input.component.scss',
})
export class MessageInputComponent {
  public messageForm!: FormGroup;
  public category = input.required<Category>();
  public sentMessage = output<Message>();
  public maxHeight = 150; // Maximum height of the textarea in pixels
  public textareaHeight = 40; // Initial height of the textarea in pixels

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.messageForm = this.fb.group({
      message: [''],
    });
  }

  onSubmit() {
    // Handle form submission if the case it is valid
    if (this.messageForm.valid) {
      const actualDate: Date = new Date();
      const message: Message = {
        createdAt: actualDate,
        author: this.authService.sessionUid,
        category: this.category(),
        content: this.messageForm.value.message,
        timestampStr: format(actualDate, 'MMM d, yyyy h:mm a'),
      };

      // Clear the input text of the send input of the message
      this.messageForm.controls['message'].patchValue('');
      this.messageForm.markAsPristine();
      this.messageForm.updateValueAndValidity();

      // Emit the message Object
      this.sentMessage.emit(message);
    }
  }

  adjustHeight(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    const contentHeight = textarea.scrollHeight;

    // If the value is small, set the default textarea height for no more than 85 characters long
    if (this.messageForm.value.message?.length < 85) {
      this.textareaHeight = 40;
    } else {
      this.textareaHeight = Math.min(contentHeight, this.maxHeight);
    }
  }
}
