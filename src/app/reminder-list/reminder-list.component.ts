import { Component } from '@angular/core';
import { Reminder } from '../models/reminder.model';

@Component({
  selector: 'app-reminder-list',
  standalone: true,
  imports: [],
  templateUrl: './reminder-list.component.html',
  styleUrl: './reminder-list.component.css'
})
export class ReminderListComponent {
  reminders: Reminder[] = []; // Здесь будут ваши тестовые данные

  constructor() {

  }
}
