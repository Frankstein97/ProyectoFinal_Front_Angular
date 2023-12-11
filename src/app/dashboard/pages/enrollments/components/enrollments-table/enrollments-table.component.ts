import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CreateEnrollmentPayload, Enrollment } from '../../models/index';
import { selectEnrollments, selectEnrollmentsIsLoading } from '../../store/enrollment.selectors';

@Component({
  selector: 'app-enrollments-table',
  templateUrl: './enrollments-table.component.html',
  styleUrls: ['./enrollments-table.component.scss']
})
export class EnrollmentsTableComponent {

  @Input()
  dataSource: CreateEnrollmentPayload[] = [];

  @Output()
  deleteEnrollment = new EventEmitter<number>();

  displayedColumns = ['id', 'course', 'user', 'actions'];

  enrollments$: Observable<Enrollment[]>
  isLoading$: Observable<boolean>;

  constructor(private store: Store) {
    this.enrollments$ = this.store.select(selectEnrollments);
    this.isLoading$ = this.store.select(selectEnrollmentsIsLoading);
  }
}
