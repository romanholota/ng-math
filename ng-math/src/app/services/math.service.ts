import { Injectable, Output, EventEmitter } from '@angular/core';
import { MathExercise } from '../types';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  @Output() weHaveANewExercise: EventEmitter<any> = new EventEmitter();

  private operators: string[] = ['+', '-', '*'];

  exercise?: MathExercise;

  constructor() { }

  public generateExercise(): void {
    let firstNumber: number = Math.floor(Math.random() * 100);
    let secondNumber: number = Math.floor(Math.random() * 100);
    let operator: string = this.operators[Math.floor(Math.random() * 3)];
    let rightAnswer!: number;
    
    switch (operator) {
      case '+':
        rightAnswer = firstNumber + secondNumber;
        break;
      case '-':
        rightAnswer = firstNumber - secondNumber;
        break;
      case '*':
        rightAnswer = firstNumber * secondNumber;
        break;
    }

    this.exercise = {
      exercise: `${String(firstNumber)} ${operator} ${String(secondNumber)}`,
      operator: operator,
      answer: rightAnswer
    };
    this.weHaveANewExercise.emit(this.exercise);
  }

  public checkAnswer(userAnswer: string): string {
    let answer: number = +userAnswer;
    if (answer === this.exercise?.answer) {
      return 'Right answer!';
    }
    else {
      return 'Wrong answer :(';
    }
  }
}
