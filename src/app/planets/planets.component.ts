import { Component } from '@angular/core';
import { SwapiService } from "../common/swapi.service";

@Component({
  selector: 'planets',
  styleUrls: ['./planets.component.css'],
  templateUrl: './planets.component.html'
})

export class PlanetsComponent {
  public planets;
  public starships = [];

  constructor(private swapiService: SwapiService) {
    this.getPlanets();
    this.getStarships();
  }

  getPlanets() {
    this.swapiService.getPlanets(null)
      .subscribe((res) => {
        this.planets = res.results;
        this.getMorePlanets(res.next);
      });
  }

  getMorePlanets(next :string) {
    this.swapiService.getPlanets(next)
      .subscribe((res) => {
        res.results.map((item) => {
          this.planets.push(item);
        })
      });
  }

  getStarships() {
    this.swapiService.getStarships(null)
      .subscribe((res) => {
        res.results.map((item) => {
          this.starships.push(item);
        })
      });
  }
}


