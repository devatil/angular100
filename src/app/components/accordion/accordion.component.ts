import { Component, Input, OnInit } from '@angular/core';
import { AccordionItem } from './accordion-item.interface';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  items: AccordionItem[] = [];

  toggle(item: AccordionItem) {
    item.isExpanded = !item.isExpanded;
  }
}
