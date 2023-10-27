import { Component, OnInit, Input, HostListener } from '@angular/core';

type reviewer = {
  name?: string,
  img?: string,
  review?: string
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() reviewer: reviewer = { };
  @Input() marginValue: number = 0

  constructor() {}

  ngOnInit(): void {

  }

}
