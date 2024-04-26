import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Reminder } from '../models/reminder.model';
import { ReminderStatus } from '../models/status.model';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  private reminders: Reminder[] = [
    {
      id: 1,
      status: ReminderStatus.New,
      shortDescription: 'Купить продукты',
      fullDescription: 'Купить продукты',
      creationDateTime: new Date('April 24, 2024 10:00:00'),
      completionDateTime: new Date('April 25, 2024 10:00:00')
    },
    {
      id: 2,
      status: ReminderStatus.Completed,
      shortDescription: 'Сделать уроки',
      fullDescription: 'Купить продукты',
      creationDateTime: new Date('April 24, 2024 10:00:00'),
      completionDateTime: new Date('April 25, 2024 10:00:00')
    },
    {
      id: 3,
      status: ReminderStatus.Completed,
      shortDescription: 'Сделать уроки',
      fullDescription: 'Купить продукты',
      creationDateTime: new Date('April 24, 2024 10:00:00'),
      completionDateTime: new Date('April 25, 2024 10:00:00')
    },
    {
      id: 4,
      status: ReminderStatus.Completed,
      shortDescription: 'Сделать уроки',
      fullDescription: 'Купить продукты',
      creationDateTime: new Date('April 24, 2024 10:00:00'),
      completionDateTime: new Date('April 25, 2024 10:00:00')
    },
    {
      id: 5,
      status: ReminderStatus.Completed,
      shortDescription: 'Сделать уроки',
      fullDescription: 'Купить продукты',
      creationDateTime: new Date('April 24, 2024 10:00:00'),
      completionDateTime: new Date('April 25, 2024 10:00:00')
    }
  ];

  constructor() {}

  // Метод для получения всех напоминаний
  getAllReminders(): Observable<Reminder[]> {
    return of(this.reminders);
  }

  // Метод для получения напоминания по id
  getReminderById(id: number): Observable<Reminder | null> {
    console.log(id);
    console.log(this.reminders[0].fullDescription);
    const reminder = this.reminders[0];

    return of(reminder ? reminder : null);
  }

  // Метод для сохранения или обновления напоминания
  saveReminder(reminder: Reminder): Observable<Reminder> {
    if (reminder.id) {
      // Если у напоминания уже есть id, это обновление существующего напоминания
      const index = this.reminders.findIndex(r => r.id === reminder.id);
      if (index !== -1) {
        this.reminders[index] = reminder;
      }
    } else {
      // Если у напоминания нет идентификатора, это создание нового напоминания
      reminder.id = this.generateUniqueId();
      this.reminders.push(reminder);
    }
    return of(reminder);
  }

  // Метод для генерации id
  private generateUniqueId(): number {
    return this.reminders.length > 0 ? Math.max(...this.reminders.map(r => r.id)) + 1 : 1;
  }
}
