import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Reminder } from '../../models/reminder.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ReminderService } from '../../services/reminder.service';

@Component({
  selector: 'app-reminder-form',
  standalone: true,
  imports: [ 
    FormsModule,
    CommonModule
  ],
  templateUrl: './reminder-form.component.html',
  styleUrl: './reminder-form.component.css'
})
export class ReminderFormComponent {
  reminder!: Reminder;
  displayedCreationDateTime: Date | null = null;
  displayedCompletionDateTime: Date | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reminderService: ReminderService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id: number = +params['id'];
      this.loadReminder(id);
    });
  }

  // Загрузка данных о напоминании из сервиса по id
  loadReminder(id: number): void {
    this.reminderService.getReminderById(id).subscribe({
      next: (data: Reminder | null) => {
        if (data) {
          this.reminder = data;
          this.displayedCreationDateTime = this.reminder.creationDateTime;
          this.displayedCompletionDateTime = this.reminder.completionDateTime;
          console.log(this.reminder);
        } else {
          console.error('Reminder not found');
        }
      },
      error: error => {
        console.error('Error loading reminder:', error);
      }
    });
  }
  
  saveChanges() {
    this.reminderService.saveReminder(this.reminder).subscribe({
      next: (savedReminder: Reminder) => {
        console.log('Changes saved successfully:', savedReminder);
        this.router.navigate(['/reminder']);
      },
      error: (error: any) => {
        console.error('Error saving changes:', error);
      }
    });
  }

  goBack() {
    this.router.navigate(['/reminder']);
  }
}
