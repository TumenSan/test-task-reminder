import { Component } from '@angular/core';
import { Reminder } from '../models/reminder.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reminder-form',
  standalone: true,
  imports: [],
  templateUrl: './reminder-form.component.html',
  styleUrl: './reminder-form.component.css'
})
export class ReminderFormComponent {
  reminder: Reminder[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    // Получение напоминания из роута и инициализация данных для редактирования
  }

  goBack() {
    this.router.navigate(['/reminder']);
  }
}
