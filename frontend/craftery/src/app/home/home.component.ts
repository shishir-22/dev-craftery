import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
contentLoader = true;

ngOnInit(){
  setTimeout(() => {this.contentLoader = false;}, 2000);
  
}
}
