import { Component } from '@angular/core';
import { Reminder } from '../models/reminder.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reminder-list',
  standalone: true,
  imports: [
    CommonModule // Включение CommonModule в разделе imports
  ],
  templateUrl: './reminder-list.component.html',
  styleUrl: './reminder-list.component.css'
})
export class ReminderListComponent {
  reminders: Reminder[] = [];

  constructor(private router: Router) {
    this.reminders = [
      {
        status: { name: 'Новый' },
        shortDescription: 'Купить продукты',
        fullDescription: 'Купить продукты',
        creationDateTime: new Date(),
        completionDateTime: new Date()
      },
      {
        status: { name: 'Исполнен' },
        shortDescription: 'Сделать уроки',
        fullDescription: 'Купить продукты',
        creationDateTime: new Date(),
        completionDateTime: new Date()
      }
    ];
  }

  openReminderForm(reminder: Reminder) {
    this.router.navigate(['/reminder']);
  }
}
