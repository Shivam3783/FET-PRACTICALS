import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-component';
  num1: number = 0;
  num2: number = 0;
  operator: string = '';
  result: number = 0;

  calculate() {
    switch (this.operator) {
      case '+':
        this.result = this.num1 + this.num2;
        break;
      case '-':
        this.result = this.num1 - this.num2;
        break;
      case '*':
        this.result = this.num1 * this.num2;
        break;
      case '/':
        this.result = this.num1 / this.num2;
        break;
      case '%':
        this.result = this.num1 % this.num2;  
    }
  }
}




// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//     <div>
//       <label for="num1">Enter first number:</label>
//       <input type="number" id="num1" [(ngModel)]="num1" />

//       <label for="operator">Select operator:</label>
//       <select id="operator" [(ngModel)]="operator">
//         <option value="+">+</option>
//         <option value="-">-</option>
//         <option value="*">*</option>
//         <option value="/">/</option>
//       </select>

//       <label for="num2">Enter second number:</label>
//       <input type="number" id="num2" [(ngModel)]="num2" />

//       <button (click)="calculate()">Calculate</button>

//       <p>Result: {{ result }}</p>
//     </div>`
  
// })
// export class AppComponent {
//   num1: number = 0;
//   num2: number = 0;
//   operator: string = '';
//   result: number = 0;

//   calculate() {
//     switch (this.operator) {
//       case '+':
//         this.result = this.num1 + this.num2;
//         break;
//       case '-':
//         this.result = this.num1 - this.num2;
//         break;
//       case '*':
//         this.result = this.num1 * this.num2;
//         break;
//       case '/':
//         this.result = this.num1 / this.num2;
//         break;
//     }
//   }
// }
