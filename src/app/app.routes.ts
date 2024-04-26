import { Routes } from '@angular/router';
import { ReminderListComponent } from './components/reminder-list/reminder-list.component';
import { ReminderFormComponent } from './components/reminder-form/reminder-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/reminder', pathMatch: 'full' }, // Перенаправление на /reminder
  { path: 'reminder', component: ReminderListComponent }, // Список напоминаний
  { path: 'reminder/:id', component: ReminderFormComponent }, // Форма напоминания с идентификатором
  { path: '**', component: NotFoundComponent } // Обработка неправильных URL
];