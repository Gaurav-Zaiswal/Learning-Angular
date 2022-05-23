import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';
  textMsg =""
  getTextMsg(event: Event) {
    this.textMsg = (event.target as HTMLInputElement).value
  }
}
