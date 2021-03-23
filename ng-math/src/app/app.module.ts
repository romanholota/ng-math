import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MathComponent } from './views/math/math.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { AnswerComponent } from './components/answer/answer.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './views/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MathComponent,
    ExerciseComponent,
    AnswerComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
