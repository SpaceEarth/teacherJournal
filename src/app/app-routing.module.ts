import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsComponent } from './components/students/students.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ExportComponent } from './components/export/export.component';
import { SubjectsListComponent } from './components/subjects/subjects-list/subjects-list.component';
import { SubjectsFormComponent } from './components/subjects/subjects-form/subjects-form.component';


const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: 'subjects-list', component: SubjectsListComponent },
  { path: 'subjects-form', component: SubjectsFormComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'export', component: ExportComponent },
  { path: 'subjects',
    redirectTo: '/subjects-list',
    pathMatch: 'full'
  },
  { path: '',
    redirectTo: '/students',
    pathMatch: 'full'
  },
  { path: '**', 
    redirectTo: '/students',
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
