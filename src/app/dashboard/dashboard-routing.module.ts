import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { adminGuard } from "../core/guards/admin.guard";


@NgModule({
    imports: [
        RouterModule.forChild([
            //  ruta: /dashboard
            {
                path: '', //  /dashboard
                component: DashboardComponent,
                children: [
                    // {
                    //     path: 'home',  //  /dashboard/home
                    //     component: HomeComponent,
                    // },

                    {
                        path: 'home',
                        loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),

                    },
                    {
                        path: 'courses',
                        canActivate: [adminGuard],
                        loadChildren: () => import('./pages/courses/courses.module').then((m) => m.CoursesModule),

                    },
                    {
                        path: 'users',
                        canActivate: [adminGuard],
                        loadChildren: () => import('./pages/users/users.module').then((m) => m.UsersModule),

                    },
                    {
                        path: 'students',
                        canActivate: [adminGuard],
                        loadChildren: () => import('./pages/students/students.module').then((m) => m.StudentsModule),

                    },
                    {
                        path: 'enrollments',
                        loadChildren: () => import('./pages/enrollments/enrollments.module').then((m) => m.EnrollmentsModule),

                    },
                    // {
                    //     path: 'courses',
                    //     component: CoursesComponent,
                    // },
                    // {
                    //     path: 'courses/:id',
                    //     component: CourseDetailComponent
                    // },

                    // {
                    //     path: 'students',
                    //     component: StudentsComponent,
                    // },
                    // {
                    //     path: 'enrollments',
                    //     component: EnrollmentsComponent,
                    // },
                    {
                        path: '**',
                        redirectTo: 'home',
                    },
                ]
            },
        ]),
    ],
    exports: [RouterModule],
})

export class DashboardRoutingModule { }
