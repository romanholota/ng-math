import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { MathComponent } from './views/math/math.component';

const routes: Routes = [
  { path: '', redirectTo: '/exercise', pathMatch: 'full' },
  { path: 'exercise', component: MathComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
