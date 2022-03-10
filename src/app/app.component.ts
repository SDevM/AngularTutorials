import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTutorials';
  textField: string = 'Moon';
  handleEvent(e: Event){
    (e.target as HTMLParagraphElement).innerHTML = "3/10/2022";
  }
  acceptText(e: Event){
    this.textField = (e.target as HTMLInputElement).value;
  }
}
