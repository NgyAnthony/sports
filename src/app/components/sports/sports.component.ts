import { Component, OnInit } from '@angular/core';
import {SportService} from '../../sport.service';
import {Model} from '../../data/model';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  sports: Model[] = [];
  currentSport = 0;

  constructor(private sportService: SportService) { }

  ngOnInit(): void {
    this.getSports();
  }

  getSports(): void {
    this.sportService.getSports()
      .subscribe(sports => this.sports = sports);
  }

  onPreviousClick() {
    const previous = this.currentSport - 1;
    this.currentSport = previous < 0 ? this.sports.length - 1 : previous;
    console.log('previous clicked, new current slide is: ', this.currentSport);
  }

  onNextClick() {
    const next = this.currentSport + 1;
    this.currentSport = next === this.sports.length ? 0 : next;
    console.log('next clicked, new current slide is: ', this.currentSport);
  }
}
