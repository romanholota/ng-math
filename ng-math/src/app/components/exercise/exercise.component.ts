import { Component, OnInit } from '@angular/core';
import { MathService } from 'src/app/services/math.service';
import { MathExercise } from 'src/app/types';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  exercise?: MathExercise;

  constructor(private mathService: MathService) { }

  ngOnInit(): void {
    this.mathService.weHaveANewExercise.subscribe((data: MathExercise) => this.exercise = data);
    this.mathService.generateExercise();
  }

}
