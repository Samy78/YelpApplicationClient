import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isButtonVisibleParent :boolean = false;
  /*receiveMessage($event) {
    this.isButtonVisibleParent = $event
  }*/
  title = 'app';
}
