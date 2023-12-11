import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrollmentsComponent } from './enrollments.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EnrollmentsRoutingModule } from './enrollments-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { EnrollmentEffects } from './store/enrollment.effects';
import { StoreModule } from '@ngrx/store';
import { enrollmentFeature } from './store/enrollment.reducer';
import { EnrollmentsTableComponent } from './components/enrollments-table/enrollments-table.component';
import { EnrollmentDialogComponent } from './components/enrollment-dialog/enrollment-dialog.component';


@NgModule({
  declarations: [
    EnrollmentsComponent,
    EnrollmentsTableComponent,
    EnrollmentDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EnrollmentsRoutingModule,
    StoreModule.forFeature(enrollmentFeature),
    EffectsModule.forFeature([EnrollmentEffects])
  ],
  exports: [
    EnrollmentsComponent
  ]
})
export class EnrollmentsModule { }
