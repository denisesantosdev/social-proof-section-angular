import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  title: string = "10,000+ of our users love our products."
  description: string = "We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services."

  constructor() { }

  ngOnInit(): void {
  }

}
