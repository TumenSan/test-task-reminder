import { Routes } from '@angular/router';
import { ReminderListComponent } from './reminder-list/reminder-list.component';
import { ReminderFormComponent } from './reminder-form/reminder-form.component';

export const appRoutes: Routes = [
  { path: 'reminder', component: ReminderListComponent }, // Список напоминаний
  { path: 'reminder/:id', component: ReminderFormComponent }, // Форма напоминания с идентификатором
];