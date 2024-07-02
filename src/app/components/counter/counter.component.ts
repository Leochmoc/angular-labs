import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  text: string = '';
  counter: number = 0;
  textlength: number = 0;

  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
  multiply() {
    this.counter *= 2;
  }
  divide() {
    this.counter /= 2;
  }
  square() {
    this.counter = this.counter ** 2;
  }
  cube() {
    this.counter = this.counter ** 3;
  }
  reset() {
    this.counter = 0;
  }

  updateCounts() {
    this.textlength = this.text.length;
  }

}
