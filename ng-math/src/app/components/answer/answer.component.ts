import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MathService } from 'src/app/services/math.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Output() newResult: EventEmitter<any> = new EventEmitter();

  answer?: number;
  userAnswer: string = '';
  result?: string;

  constructor(private mathService: MathService) { }

  ngOnInit(): void {
  }

  submitAnswer(): void {
    this.result = this.mathService.checkAnswer(this.userAnswer);
    this.mathService.generateExercise();
    this.newResult.emit(this.result);
    this.userAnswer = '';
    event?.preventDefault();
  }
}
