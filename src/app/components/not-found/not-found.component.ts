import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  template: `
    <div>
      <h2>404 - Страница не найдена</h2>
      <button (click)="redirectToHome()">На главную</button>
    </div>
  `,
  styles: [`
    div {
      text-align: center;
      margin-top: 50px;
    }
  `]
})
export class NotFoundComponent {
  constructor(private router: Router) {}

  redirectToHome(): void {
    this.router.navigate(['/reminder']);
  }
}
