import { Component } from '@angular/core';
import { Reminder } from '../../models/reminder.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReminderService } from '../../services/reminder.service';

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

  constructor(
    private router: Router, 
    private reminderService: ReminderService
  ) { }

  ngOnInit(): void {
    this.loadReminders();
  }

  loadReminders() {
    this.reminderService.getAllReminders().subscribe({
      next: (data: Reminder[]) => {
        this.reminders = data;
      },
      error: (error: any) => {
        console.error('Error loading reminders:', error);
      }
    });
  }

  openReminderForm(reminder: Reminder) {
    this.router.navigate(['/reminder', reminder.id]);
  }
}
