import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CodeEditorModule } from '@ngstack/code-editor';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { ProblemDetailComponent } from './problem-detail/problem-detail.component';
import { AppConfig } from './app.config';
import { ListingsComponent } from './listings/listings.component';

export function initConfig(config: AppConfig) {
  return () => config.load();
}

@NgModule({
  declarations: [
    AppComponent,
    ProblemDetailComponent,
    ListingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CodeEditorModule.forRoot(),
    HttpClientModule // Add HttpClientModule to the imports array
  ],
  exports: [
    CodeEditorModule
  ],
  providers: [ AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: initConfig,
      deps: [AppConfig],
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
