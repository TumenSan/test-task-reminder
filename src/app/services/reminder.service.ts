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
      status: ReminderStatus.Completed,
      shortDescription: 'Купить продукты',
      fullDescription: 'Купить сыр, масло, картошку',
      creationDateTime: new Date('April 24, 2024 10:00'),
      completionDateTime: new Date('April 25, 2024 10:00')
    },
    {
      id: 2,
      status: ReminderStatus.Planned,
      shortDescription: 'Убраться',
      fullDescription: 'Помыть пол, помыть окна, стены',
      creationDateTime: new Date('April 23, 2024 10:00'),
      completionDateTime: new Date('April 25, 2024 10:00:00')
    },
    {
      id: 3,
      status: ReminderStatus.Completed,
      shortDescription: 'Сходить в больницу',
      fullDescription: 'Нужно быть на приеме у терапевта',
      creationDateTime: new Date('April 22, 2024 10:00'),
      completionDateTime: new Date('April 24, 2024 10:00')
    },
    {
      id: 4,
      status: ReminderStatus.Planned,
      shortDescription: 'Сделать задания',
      fullDescription: 'Решить задания по номерам',
      creationDateTime: new Date('April 20, 2024 10:00'),
      completionDateTime: new Date('April 25, 2024 10:00')
    },
    {
      id: 5,
      status: ReminderStatus.Overdue,
      shortDescription: 'Отправить посылку',
      fullDescription: 'Отправить посылку',
      creationDateTime: new Date('April 23, 2024 10:00'),
      completionDateTime: new Date('April 25, 2024 10:00')
    }
  ];

  constructor() {}

  // Метод для получения всех напоминаний
  getAllReminders(): Observable<Reminder[]> {
    return of(this.reminders);
  }

  // Метод для получения напоминания по id
  getReminderById(id: number): Observable<Reminder | null> {
    const reminder = this.reminders.find(r => r.id === id);
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
