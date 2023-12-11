import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {
        path: '',
        component: CoursesComponent
    },
    {  
        path: ':id',
        component: CourseDetailComponent
    },
  ])],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }