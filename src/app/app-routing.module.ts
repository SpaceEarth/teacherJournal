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
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ExportGuard } from './guards/export.guard';
import { RouteConfig as R, OutletConfig as O } from './common/enums/router.enum';

const studentsRoutes: Routes = [
  { path: R.Table, component: StudentsTableComponent },
  { path: R.Form, component: StudentsFormComponent },
  { path: '', redirectTo: `/${R.Students}/${R.Table}`, pathMatch: 'full' },
];

const subjectsRoutes: Routes = [
  { path: R.List, component: SubjectsListComponent },
  { path: R.Form, component: SubjectsFormComponent },
  { path: `${R.Table}/:${R.Id}`, component: SubjectsTableComponent },
  { path: '', redirectTo: `/${R.Subjects}/${R.List}`, pathMatch: 'full' },
];

const routes: Routes = [
  { path: R.Students, children: studentsRoutes },
  { path: R.Subjects, children: subjectsRoutes },
  { path: R.Statistics, component: StatisticsComponent, children: [
    { path: R.Students, component: StudentListComponent, outlet: O.StatisticList },
    { path: R.Subjects, component: SubjectListComponent, outlet: O.StatisticList },
    { path: `${R.Students}/:${R.Id}`, component: StudentChartComponent, outlet: O.StatisticBlock },
    { path: `${R.Subjects}/:${R.Id}`, component: SubjectChartComponent, outlet: O.StatisticBlock },
  ] },
  { path: R.Export, component: ExportComponent, canActivate: [ExportGuard] },
  { path: '',
    redirectTo: `/${R.Students}/${R.Table}`,
    pathMatch: 'full',
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
