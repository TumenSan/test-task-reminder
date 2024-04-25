import { Routes } from '@angular/router';
import { ReminderListComponent } from './components/reminder-list/reminder-list.component';
import { ReminderFormComponent } from './components/reminder-form/reminder-form.component';

export const appRoutes: Routes = [
  { path: 'reminder', component: ReminderListComponent }, // Список напоминаний
  { path: 'reminder/:id', component: ReminderFormComponent }, // Форма напоминания с идентификатором
];