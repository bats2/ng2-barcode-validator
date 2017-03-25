import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  isDarkTheme: boolean = false;
  private title: string = 'Angular Barcode Scanner and Validator Using Observable (RxJS)';
  private fork: string = 'FORK ME!';
}
