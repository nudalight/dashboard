import {Component} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public toggleMenu = () => {
    console.info('WORKED!');
    $('.ui.sidebar')
      .sidebar('toggle')
    ;
  }
}
