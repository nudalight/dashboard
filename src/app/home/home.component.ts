import {Component} from '@angular/core';
declare var $: any;

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor() {
    $(document).ready(function() {
      console.info('Y!');
      // $('.ui.sidebar')
      //   .sidebar('toggle')
      // ;
    });
  }
}
