import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listings.component.html',
  styleUrl: './listings.component.css'
})
export class ListingsComponent {
  tableData = [
    { number: 1, title: 'Sample Title 1', difficulty: 'Easy', tags: ['Tag A'] },
    { number: 2, title: 'Sample Title 2', difficulty: 'Medium', tags: ['Tag B'] },
    // Add more data as needed
  ];
}
