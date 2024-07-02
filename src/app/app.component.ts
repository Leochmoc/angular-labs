import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CodeHighlightComponent } from './components/code-highlight/code-highlight.component';
import { CounterComponent } from './components/counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CodeHighlightComponent, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-labs';

  code  = `
    function saludo() {
      console.log("¡Hola mundo!");
    }
  `;
}
