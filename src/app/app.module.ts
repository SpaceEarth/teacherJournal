import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/app.component';
import { PanelComponent } from './components/panel/panel.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ExportComponent } from './components/export/export.component';
import { ButtonComponent } from './shared/components/button/button.component';
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
import { MarkColorDirective } from './directives/markColor/mark-color.directive';
import { TableSortPipe } from './pipes/tableSort/table-sort.pipe';
import { AuthInterceptor } from './interceptors/auth.service';

import { studentReducer } from './components/students/students.reducer';
import { StudentEffects } from './components/students/students.effects';
import { EffectsModule } from '@ngrx/effects';
import { AppStore } from './common/entities/appStore';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    StatisticsComponent,
    ExportComponent,
    ButtonComponent,
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
    SplitCamelCasePipe,
    MarkColorDirective,
    TableSortPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ [AppStore.Students]: studentReducer }),
    EffectsModule.forRoot([StudentEffects]),
    // EffectsModule.forFeature(),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    MatTableModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
