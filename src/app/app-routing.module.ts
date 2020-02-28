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
import { JournalRoutes, JournalOutlets } from './common/enums/router.enum';

const studentsRoutes: Routes = [
  { path: JournalRoutes.Table, component: StudentsTableComponent },
  { path: JournalRoutes.Form, component: StudentsFormComponent },
  { path: '', redirectTo: `/${JournalRoutes.Students}/${JournalRoutes.Table}`, pathMatch: 'full' },
];

const subjectsRoutes: Routes = [
  { path: JournalRoutes.List, component: SubjectsListComponent },
  { path: JournalRoutes.Form, component: SubjectsFormComponent },
  { path: `${JournalRoutes.Table}/:${JournalRoutes.Id}`, component: SubjectsTableComponent },
  { path: '', redirectTo: `/${JournalRoutes.Subjects}/${JournalRoutes.List}`, pathMatch: 'full' },
];

const routes: Routes = [
  { path: JournalRoutes.Students, children: studentsRoutes },
  { path: JournalRoutes.Subjects, children: subjectsRoutes },
  { path: JournalRoutes.Statistics, component: StatisticsComponent, children: [
    { path: JournalRoutes.Students, component: StudentListComponent, outlet: JournalOutlets.StatisticList },
    { path: JournalRoutes.Subjects, component: SubjectListComponent, outlet: JournalOutlets.StatisticList },
    { path: `${JournalRoutes.Students}/:${JournalRoutes.Id}`, component: StudentChartComponent, outlet: JournalOutlets.StatisticBlock },
    { path: `${JournalRoutes.Subjects}/:${JournalRoutes.Id}`, component: SubjectChartComponent, outlet: JournalOutlets.StatisticBlock },
  ] },
  { path: JournalRoutes.Export, component: ExportComponent, canActivate: [ExportGuard] },
  { path: '',
    redirectTo: `/${JournalRoutes.Students}/${JournalRoutes.Table}`,
    pathMatch: 'full',
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
