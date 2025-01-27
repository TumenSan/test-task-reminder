import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { Reminder } from '../../models/reminder.model';
import { ReminderService } from '../../services/reminder.service';

@Component({
  selector: 'app-reminder-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './reminder-list.component.html',
  styleUrls: ['./reminder-list.component.css']
})
export class ReminderListComponent implements OnInit {
  reminders: Reminder[] = [];
  displayedColumns: string[] = ['status', 'shortDescription', 'creationDateTime', 'completionDateTime'];

  constructor(
    private router: Router,
    private reminderService: ReminderService
  ) {}

  ngOnInit(): void {
    this.loadReminders();
  }

  loadReminders(): void {
    this.reminderService.getAllReminders().subscribe({
      next: (data: Reminder[]) => {
        this.reminders = data;
      },
      error: (error: any) => {
        console.error('Error loading reminders:', error);
      }
    });
  }

  openReminderForm(reminder: Reminder): void {
    this.router.navigate(['/reminder', reminder.id]);
  }

  deleteReminder(reminder: Reminder): void {
    // Логика удаления напоминания
    console.log('Delete reminder:', reminder);
  }
}