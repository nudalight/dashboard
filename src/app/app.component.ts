import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit  {

  constructor() {

  }

  ngOnInit() {
    this.listenToSidebarClick();
  }

  public toggleMenu = () => {
    console.info('WORKED!');
    $('.ui.sidebar')
      .sidebar('toggle')
    ;
  };

  public listenToSidebarClick = () => {
    const $sidebar = $('.sidebar');
    $sidebar.on('click', () => {
      $sidebar.sidebar('hide');
    });
  }
}
