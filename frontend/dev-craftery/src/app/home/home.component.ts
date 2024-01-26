import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
contentLoader = true;
displayStyle = "none";
signIn = false;
signUp = false;

ngOnInit(){
  setTimeout(() => {this.contentLoader = false;}, 1000);
  
}

openPopup() { 
  this.displayStyle = "block"; 
  this.signIn = true;
  this.signUp = false;
} 

closePopup() { 
  this.displayStyle = "none"; 
} 

clickSignUp() {
  this.signUp = true;
  this.signIn = false;
}

clickSignIn() {
  this.signIn = true;
  this.signUp = false;
}

}
