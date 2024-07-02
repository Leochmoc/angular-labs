import { Component, ElementRef, Input } from '@angular/core';
import { HighlightService } from '../../services/highlight.service';

@Component({
  selector: 'app-code-highlight',
  standalone: true,
  imports: [],
  templateUrl: './code-highlight.component.html',
  styleUrl: './code-highlight.component.css'
})
export class CodeHighlightComponent {
  @Input() code: string = '';
  @Input() language: string = '';

  constructor(private el: ElementRef, private highlightService: HighlightService) {}

  ngAfterViewInit() {
    const codeElement = this.el.nativeElement.querySelector('code');
    if (codeElement) {
      this.highlightService.highlightElement(codeElement);
    } else {
      console.error('Code element not found');
    }
  }

}