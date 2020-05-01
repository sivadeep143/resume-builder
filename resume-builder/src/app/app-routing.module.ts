import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelineComponent } from './timeline/timeline.component';
import { CreateResumeComponent } from './create-resume/create-resume.component';


const routes: Routes = [
  {
    path : 'timeline', component : TimelineComponent
  },
  {
    path : 'createresume', component : CreateResumeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
