import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observables';
  arr: any[] = [];
  counter = 0;
  constructor() {
    const num: Observable<number> = new Observable((observer) => {
      let inc = 0;
      setInterval(() => {
        observer.next(inc++);
      }, 300);
    });

    num.subscribe(
      (number) => {
        if (number % 2 == 0) {
          if (this.counter < 15) {
            console.log(number);
            this.arr.push(number);
            this.counter++;
          }
        }
      },
      (error) => {
        console.log('Error:', error);
        this.arr.push(error);
      },
      () => {
        console.log('Observable completed');
        this.arr.push('Observable completed');
      }
    );
  }
}
