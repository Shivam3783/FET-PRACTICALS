import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  n1: number = 0;
  n2: number = 0;
  operator: string = '';
  result: number = 0;

  calculate() {
    switch (this.operator) {
      case '+':
        this.result = this.n1 + this.n2;
        break;
      case '-':
        this.result = this.n1 - this.n2;
        break;
      case '*':
        this.result = this.n1 * this.n2;
        break;
      case '/':
        this.result = this.n1 / this.n2;
        break;
      case '%':
        this.result = this.n1 % this.n2;  
    }
  }

  // constructor(private route: ActivatedRoute, private router: Router) {}


}
