
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CodeModel } from '@ngstack/code-editor';
import { AppService } from '../app.service';

@Component({
  selector: 'app-problem-detail',
  templateUrl: './problem-detail.component.html',
  styleUrls: ['./problem-detail.component.css']
})
export class ProblemDetailComponent {
  problemDetails: any;
  constructor(private router: Router, private appService: AppService,
    private _route: ActivatedRoute) {}
  problemId: any;
  theme = 'vs-dark';

  model: CodeModel = {
    language: 'python',
    uri: 'main.py',
    value: '{}',
  };

  options = {
    contextmenu: true,
    minimap: {
      enabled: true,
    },
  };

  onCodeChanged(value: any) {
    console.log('CODE', value);
  }

  ngOnInit() {
    this.problemId = this._route.snapshot.paramMap.get('id')

     this.appService.getProblem(this.problemId).subscribe((result) => {
      this.problemDetails = result
      console.log(result
        );
      
        this.problemDetails.description.sample_input = Object.keys(this.problemDetails.description.sample_input).map(key => {
          return this.problemDetails.description.sample_input[key];
        });
    
        // Convert tag_details to array of strings
        this.problemDetails.tag_details = this.problemDetails.tag_details.map((tag: { tag_name: any; }) => tag.tag_name);
    })

  }

}
