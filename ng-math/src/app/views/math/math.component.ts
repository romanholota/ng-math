import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent implements OnInit {

  result: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  showResult(result: string): void {
    this.result = result;
  }

}
