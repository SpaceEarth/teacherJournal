import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/app.component';
import { PanelComponent } from './components/panel/panel.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ExportComponent } from './components/export/export.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { FormComponent } from './shared/components/form/form.component';
import { TableComponent } from './shared/components/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubjectsListComponent } from './components/subjects/subjects-list/subjects-list.component';
import { SubjectsFormComponent } from './components/subjects/subjects-form/subjects-form.component';
import { StudentsTableComponent } from './components/students/students-table/students-table.component';
import { StudentsFormComponent } from './components/students/students-form/students-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    StatisticsComponent,
    ExportComponent,
    ButtonComponent,
    FormComponent,
    TableComponent,
    SubjectsListComponent,
    SubjectsFormComponent,
    StudentsTableComponent,
    StudentsFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
