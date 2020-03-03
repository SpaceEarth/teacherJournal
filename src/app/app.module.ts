import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/app.component';
import { PanelComponent } from './components/panel/panel.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ExportComponent } from './components/export/export.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { TableComponent } from './shared/components/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubjectsListComponent } from './components/subjects/subjects-list/subjects-list.component';
import { SubjectsFormComponent } from './components/subjects/subjects-form/subjects-form.component';
import { StudentsTableComponent } from './components/students/students-table/students-table.component';
import { StudentsFormComponent } from './components/students/students-form/students-form.component';
import { SubjectsTableComponent } from './components/subjects/subjects-table/subjects-table.component';
import { StudentListComponent } from './components/statistics/list/student-list/student-list.component';
import { SubjectListComponent } from './components/statistics/list/subject-list/subject-list.component';
import { StudentChartComponent } from './components/statistics/chart/student-chart/student-chart.component';
import { SubjectChartComponent } from './components/statistics/chart/subject-chart/subject-chart.component';
import { ItemsListComponent } from './shared/components/items-list/items-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SplitCamelCasePipe } from './pipes/camelCase/split-camel-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    StatisticsComponent,
    ExportComponent,
    ButtonComponent,
    TableComponent,
    SubjectsListComponent,
    SubjectsFormComponent,
    StudentsTableComponent,
    StudentsFormComponent,
    SubjectsTableComponent,
    StudentListComponent,
    SubjectListComponent,
    StudentChartComponent,
    SubjectChartComponent,
    ItemsListComponent,
    NotFoundComponent,
    SplitCamelCasePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
