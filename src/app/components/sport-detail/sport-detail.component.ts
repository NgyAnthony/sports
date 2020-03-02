import { Component, OnInit } from '@angular/core';
import {SportService} from '../../sport.service';
import {ActivatedRoute} from '@angular/router';
import {Model} from '../../data/model';

@Component({
  selector: 'app-sport-detail',
  templateUrl: './sport-detail.component.html',
  styleUrls: ['./sport-detail.component.css']
})
export class SportDetailComponent implements OnInit {
  sport: Model;

  constructor(private sportService: SportService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.sportService.getSport(id)
      .subscribe(sport => this.sport = sport);
  }

}
