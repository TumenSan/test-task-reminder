import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Reminder } from '../../models/reminder.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ReminderService } from '../../services/reminder.service';

@Component({
  selector: 'app-reminder-form',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './reminder-form.component.html',
  styleUrl: './reminder-form.component.css'
})
export class ReminderFormComponent {
  reminder!: Reminder;

  constructor(private route: ActivatedRoute, private router: Router, private reminderService: ReminderService) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: params => {
        const id = params['id'];
        console.log('id: ', id);
        // Загрузка данных о напоминании из сервиса по id
        this.reminderService.getReminderById(id).subscribe({
          next: (data: Reminder | null) => {
            if (data) {
              this.reminder = data;
              console.log(this.reminder);
            } else {
              console.error('Reminder not found');
            }
          },
          error: error => {
            console.error('Error loading reminder:', error);
          }
        });
      },
      error: error => {
        console.error('Error subscribing to route params:', error);
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
