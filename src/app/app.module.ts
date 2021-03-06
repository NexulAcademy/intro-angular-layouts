import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule, MatListModule,
  MatGridListModule, MatCardModule,
  MatMenuModule, MatTableModule,
  MatPaginatorModule, MatSortModule
} from '@angular/material';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { CourseTableComponent } from './course-table/course-table.component';
import { StudentTableComponent } from './student-table/student-table.component';

const appRoutes: Routes = [
  { path: '', component: AppDashboardComponent},
  { path: 'students', component: StudentTableComponent},
  { path: 'courses', component: CourseTableComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    AppDashboardComponent,
    CourseTableComponent,
    StudentTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
