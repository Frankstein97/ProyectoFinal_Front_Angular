import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '../shared/shared.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatListModule } from '@angular/material/list';
import { DashboardRoutingModule } from './dashboard-routing.module';




@NgModule({
  declarations: [
    DashboardComponent,
    ToolbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    SharedModule,
    MatListModule,
    DashboardRoutingModule

  ],
  exports: [DashboardComponent],
})
export class DashboardModule { }
