import { Component } from '@angular/core';
import { EnrollmentActions } from './store/enrollment.actions';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { EnrollmentDialogComponent } from './components/enrollment-dialog/enrollment-dialog.component';
import { Observable, concatMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CreateEnrollmentPayload, Enrollment } from './models';
import { environment } from 'src/environments/environment.local';


@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrls: ['./enrollments.component.scss']
})
export class EnrollmentsComponent {

  enrollmentName = '';
  enrollments$: Observable<CreateEnrollmentPayload[]>;

  constructor(private store: Store, private dialog: MatDialog, private httpClient: HttpClient){

    this.enrollments$ = this.getEnrollments();

    this.store.dispatch(EnrollmentActions.loadEnrollments())
  }

  addEnrollment(): void {
    this.dialog.open(EnrollmentDialogComponent);
  }

  getEnrollments(): Observable<CreateEnrollmentPayload[]> {
    return this.httpClient.get<CreateEnrollmentPayload[]>(`${environment.baseUrl}/enrollments`);
    
  }

  deleteEnrollment(id: number): Observable<CreateEnrollmentPayload[]> {
    return this.httpClient
    .delete<Object>(`${environment.baseUrl}/enrollments/${id}`)
    .pipe(concatMap(() => this.getEnrollments())
    )
  }

  onDeleteEnrollment(enrollmentId: number): void {
    if (confirm('Are you sure you want to delete this enrollment?')) {
      this.enrollments$ = this.deleteEnrollment(enrollmentId)
     
    }
  }

}

