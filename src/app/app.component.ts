import { Component } from '@angular/core';
import { AccordionItem } from './components/accordion/accordion-item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public accordionItems: AccordionItem[] = [
    {
      title: 'Example-1',
      content: 'Example Content - 1',
      isExpanded: false,
    },

    {
      title: 'Example-2',
      content: 'Example Content - 2',
      isExpanded: false,
    },
  ];

  progressValue = 25;
}
