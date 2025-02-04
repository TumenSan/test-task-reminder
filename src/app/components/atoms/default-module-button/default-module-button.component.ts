import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'def-module-button',
  template: `
    <div>
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
export class DefaultModuleButtonComponent {
  constructor(private router: Router) {}

  redirectToHome(): void {
    this.router.navigate(['/reminder']);
  }
}
