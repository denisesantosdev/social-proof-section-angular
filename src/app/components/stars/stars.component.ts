import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  starNumber: number = 5
  @Input() reviewSite:string=''
  @Input() marginValue:number=0

  constructor() { }

  ngOnInit(): void {
  }
  
  // generate an array with the specified number
  numSequence(n: number): Array<number> { 
    return Array(n); 
  } 

}
