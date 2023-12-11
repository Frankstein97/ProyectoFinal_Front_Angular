import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoursesService } from '../../courses.service';
import { Course } from '../../models';

@Component({
  selector: 'app-courses-dialog',
  templateUrl: './courses-dialog.component.html',
  styleUrls: ['./courses-dialog.component.scss'],
})
export class CoursesDialogComponent {
  courseForm: FormGroup;

  constructor(private fb: FormBuilder,
    private matDialogRef: MatDialogRef<CoursesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public course?: Course,
    ) {

      this.courseForm = this.fb.group({
        name: ['', Validators.required],
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
      });

      if(this.course) {
        this.courseForm.patchValue(this.course);
      }

    }

    onSubmit(): void {
      if (this.courseForm.invalid) {
        this.courseForm.markAllAsTouched();
      } else {
        this.matDialogRef.close(this.courseForm.value);
      }
    }
}





