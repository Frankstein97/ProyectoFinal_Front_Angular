import { Injectable } from '@angular/core';
import { Course } from './models';
import { Observable, concatMap, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.local';

@Injectable({ providedIn: 'root' })
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`${environment.baseUrl}/courses`);
  }

  createCourse(payload: Course): Observable<Course[]> {
    return this.httpClient
      .post<Course>(`${environment.baseUrl}/courses`, payload)
      .pipe(concatMap(() => this.getCourses()));
  }

  updateCourse(courseId: number, payload: Course): Observable<Course[]> {
    return this.httpClient
      .put<Course>(`${environment.baseUrl}/courses/${courseId}`, payload)
      .pipe(concatMap(() => this.getCourses()));
  }

  deleteCourse(id: number): Observable<Course[]> {
    return this.httpClient
    .delete<Object>(`${environment.baseUrl}/courses/${id}`)
    .pipe(concatMap(() => this.getCourses())
    )
  }
}



