export class Status {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

export enum ReminderStatus {
  New = 'Новый',
  Completed = 'Исполнен',
  Planned = 'Запланирован',
  Overdue = 'Просрочен'
}