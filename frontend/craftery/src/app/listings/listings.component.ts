import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent {
  constructor(private router: Router, private appService: AppService) {}
   tableData= [
    { id: 1, title: 'Sample Title 1', difficulty: 'Easy', tags: ['Tag A'] },
    { id: 2, title: 'Sample Title 2', difficulty: 'Medium', tags: ['Tag B'] },
    // Add more data as needed
  ];
  ngOnInit(){
    this.appService.getProblems().subscribe((result) => {

      this.tableData = result
    })

  }

  openProblem(id: any):any{
    console.log(`Title clicked for problem ${id}`);
    this.router.navigate(['/problem', id]);
    
  }
}
