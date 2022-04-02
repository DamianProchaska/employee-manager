import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Area } from "../area.model";

@Injectable({ providedIn: 'root' })
export class AreasService {
  private areas: Area[] = [];
  private areasUpdated = new Subject<Area[]>();

  constructor(private http: HttpClient) { }

  getAreas() {
    this.http.get<{ message: string, areas: Area[] }>('http://localhost:3000/api/areas')
      .subscribe((areasData) => {
        this.areas = areasData.areas;
        this.areasUpdated.next([...this.areas]);
      });
  }

  getAreasListener() {
    return this.areasUpdated.asObservable();
  }
}
