import {Component} from '@angular/core';
declare var $: any;

@Component({
  selector: 'about',
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  constructor() {
    $(document).ready(function() {
      console.info('Y!');
    });
  }
}
