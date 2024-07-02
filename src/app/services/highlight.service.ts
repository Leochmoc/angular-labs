import { Injectable } from '@angular/core';
import * as Prism from 'prismjs';

@Injectable({
  providedIn: 'root'
})
export class HighlightService {

  constructor() { }

  highlightElement(element: HTMLElement) {
    Prism.highlightElement(element);
  }
}
