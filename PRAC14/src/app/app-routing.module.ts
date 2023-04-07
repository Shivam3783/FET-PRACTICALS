import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcComponent } from './calc/calc.component';
import { MovieComponent } from './movie/movie.component';
import { TodoComponent } from './todo/todo.component';



const routes: Routes = [
  { path: 'calculator1', component: CalcComponent },
  { path: 'movieRecommendation', component: MovieComponent},
  { path: 'todolist', component: TodoComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
