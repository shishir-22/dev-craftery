import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { FormsModule } from '@angular/forms';
import { CodeEditorModule } from '@ngstack/code-editor';
import { ProblemDetailsComponent } from './problem-details/problem-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProblemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MonacoEditorModule.forRoot(),
    CodeEditorModule.forRoot(),
    FormsModule  
  ],
  exports: [
    CodeEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent,ProblemDetailsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class AppModule { }
