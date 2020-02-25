import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatisticsComponent } from './components/statistics/statistics.component';
import { ExportComponent } from './components/export/export.component';
import { SubjectsListComponent } from './components/subjects/subjects-list/subjects-list.component';
import { SubjectsFormComponent } from './components/subjects/subjects-form/subjects-form.component';
import { StudentsTableComponent } from './components/students/students-table/students-table.component';
import { StudentsFormComponent } from './components/students/students-form/students-form.component';


const routes: Routes = [
  { path: 'students-table', component: StudentsTableComponent },
  { path: 'students-form', component: StudentsFormComponent },
  { path: 'subjects-list', component: SubjectsListComponent },
  { path: 'subjects-form', component: SubjectsFormComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'export', component: ExportComponent },
  { path: 'subjects',
    redirectTo: '/subjects-list',
    pathMatch: 'full'
  },
  { path: '',
    redirectTo: '/students-table',
    pathMatch: 'full'
  },
  { path: '**', 
    redirectTo: '/students-table',
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
