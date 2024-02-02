import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';



@Component({
  selector: 'app-problem-details',
  templateUrl: './problem-details.component.html',
  styleUrls: ['./problem-details.component.css'],
})
export class ProblemDetailsComponent {
  theme = 'vs-dark';

  codeModel: CodeModel = {
    language: 'json',
    uri: 'main.json',
    value: '{}'
  };

  options = {
    contextmenu: true,
    minimap: {
      enabled: true
    }
  };

  onCodeChanged(value: any) {
    console.log('CODE', value);
  }


}
