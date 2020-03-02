import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Model} from './data/model';
import {SPORTS} from './data/sports';

@Injectable({
  providedIn: 'root'
})
export class SportService {
  constructor() { }

  getSports(): Observable<Model[]> {
    return of(SPORTS);
  }

  getSport(id: number): Observable<Model> {
    return of(SPORTS.find(sport => sport.id === id));
  }
}
