import { Component } from '@angular/core';
import { Reminder } from '../models/reminder.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reminder-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './reminder-list.component.html',
  styleUrl: './reminder-list.component.css'
})
export class ReminderListComponent {
  reminders: Reminder[] = [];

  constructor(private router: Router) {
    this.reminders = [
      {
        id: 1,
        status: { name: 'Новый' },
        shortDescription: 'Купить продукты',
        fullDescription: 'Купить продукты',
        creationDateTime: new Date('April 24, 2024 10:00:00'),
        completionDateTime: new Date('April 25, 2024 10:00:00')
      },
      {
        id: 2,
        status: { name: 'Исполнен' },
        shortDescription: 'Сделать уроки',
        fullDescription: 'Купить продукты',
        creationDateTime: new Date('April 24, 2024 10:00:00'),
        completionDateTime: new Date('April 25, 2024 10:00:00')
      }
    ];
  }

  openReminderForm(reminder: Reminder) {
    console.log('Двойной щелчок на напоминании:', reminder);
    this.router.navigate(['/reminder', reminder.id]);
  }
}
