import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

@NgModule({
declarations: [
AppComponent,
EmployeeCreateComponent,
EmployeeEditComponent,
EmployeeListComponent
],  
imports: [
BrowserModule,
AppRoutingModule,
HttpClientModule,
FormsModule,
ReactiveFormsModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule {}