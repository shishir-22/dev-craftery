import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent {
  constructor(private router: Router) {}
  tableData = [
    { number: 1, title: 'Sample Title 1', difficulty: 'Easy', tags: ['Tag A'] },
    { number: 2, title: 'Sample Title 2', difficulty: 'Medium', tags: ['Tag B'] },
    // Add more data as needed
  ];

  openProblem(id: any):any{
    console.log(`Title clicked for problem ${id}`);
    this.router.navigate(['/problem', id]);
    
  }
}
