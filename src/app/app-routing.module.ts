import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatisticsComponent } from './components/statistics/statistics.component';
import { ExportComponent } from './components/export/export.component';
import { SubjectsListComponent } from './components/subjects/subjects-list/subjects-list.component';
import { SubjectsFormComponent } from './components/subjects/subjects-form/subjects-form.component';
import { StudentsTableComponent } from './components/students/students-table/students-table.component';
import { StudentsFormComponent } from './components/students/students-form/students-form.component';
import { SubjectsTableComponent } from './components/subjects/subjects-table/subjects-table.component';
import { StudentListComponent } from './components/statistics/list/student-list/student-list.component';
import { SubjectListComponent } from './components/statistics/list/subject-list/subject-list.component';
import { SubjectChartComponent } from './components/statistics/chart/subject-chart/subject-chart.component';
import { StudentChartComponent } from './components/statistics/chart/student-chart/student-chart.component';


const studentsRoutes: Routes = [
  { path: 'table', component: StudentsTableComponent },
  { path: 'form', component: StudentsFormComponent },
  { path: '', redirectTo: '/students/table', pathMatch: 'full' },
];

const subjectsRoutes: Routes = [
  { path: 'list', component: SubjectsListComponent },
  { path: 'form', component: SubjectsFormComponent },
  { path: 'table/:id', component: SubjectsTableComponent },
  { path: '', redirectTo: '/subjects/list', pathMatch: 'full' },
];

const routes: Routes = [
  { path: 'students', children: studentsRoutes },
  { path: 'subjects', children: subjectsRoutes },
  { path: 'statistics', component: StatisticsComponent, children: [
    { path: 'subjects', component: SubjectListComponent, outlet: "statistic-list" },
    { path: 'students', component: StudentListComponent, outlet: "statistic-list" },
    { path: 'subjects/:id', component: SubjectChartComponent, outlet: "statistic-block" },
    { path: 'students/:id', component: StudentChartComponent, outlet: "statistic-block" },
  ] },
  { path: 'export', component: ExportComponent },
  { path: '',
    redirectTo: '/students/table',
    pathMatch: 'full',
  },
  { path: 'not_found', component: ExportComponent },
  { path: '**', 
    redirectTo: '/not_found',
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
