import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
import { Observable } from 'rxjs';
import { Course } from './models';
import { MatDialog } from '@angular/material/dialog';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courseName = '';
  courses$: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService,
    private matDialog: MatDialog
  ) {
    this.courses$ = this.coursesService.getCourses();
  }

  addCourse(): void {
    this.matDialog
    .open(CoursesDialogComponent)
    .afterClosed()
    .subscribe({
      next: (v) => {
        if (!!v) {
          this.courses$ = this.coursesService.createCourse(v);
        }
      },
    });
  }

  onEditCourse(course: Course): void {
    this.matDialog
      .open(CoursesDialogComponent, {
        data: course,
      })
      .afterClosed()
      .subscribe({
        next: (v) => {
          if (!!v) {
            this.courses$ = this.coursesService.updateCourse(course.id, v);
          }
        },
      });
  }

  onDeleteCourse(courseId: number): void {
    if (confirm('Are you sure you want to delete this course?')) {
      this.courses$ = this.coursesService.deleteCourse(courseId)
    }
  }
}



