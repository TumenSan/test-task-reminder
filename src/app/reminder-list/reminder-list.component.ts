import { Component } from '@angular/core';
import { Reminder } from '../models/reminder.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reminder-list',
  standalone: true,
  imports: [],
  templateUrl: './reminder-list.component.html',
  styleUrl: './reminder-list.component.css'
})
export class ReminderListComponent {
  reminders: Reminder[] = [];

  constructor(private router: Router) {

  }

  openReminderForm(reminder: Reminder) {
    this.router.navigate(['/reminder']);
  }
}
