import { Component } from '@angular/core';
import { SwapiService } from "../common/swapi.service";
declare var $: any;

@Component({
  selector: 'about',
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html'
})

export class AboutComponent {
  private people;
  private test;

  constructor(private swapiService: SwapiService) {
    $(document).ready(function() {
      console.info('Y!');
    });
    this.getPeople();
    this.test = 'TEST STRING';
  }

  getPeople() {
    this.swapiService.getPeople(null)
      .subscribe((res) => {
        this.people = res.results;
        this.getMorePeople(res.next);
      });
  }

  getMorePeople(next :string) {
    this.swapiService.getPeople(next)
      .subscribe((res) => {
        res.results.map((item) => {
          this.people.push(item);
        })
      });
  }
}


