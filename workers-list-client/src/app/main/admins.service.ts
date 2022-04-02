import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Admin } from "../admin.model";

@Injectable({ providedIn: 'root' })
export class AdminsService {
  private admins: Admin[] = [];
  private adminsUpdated = new Subject<Admin[]>();

  constructor(private http: HttpClient) { }

  getAdmins() {
    this.http.get<{ message: string, admins: Admin[] }>('http://localhost:3000/api/admins')
      .subscribe((adminsData) => {
        this.admins = adminsData.admins;
        this.adminsUpdated.next([...this.admins]);
      });
  }

//   addWorker(name: string, job:string, tel: number,email:string, position:number,specification:string,foto:string) {
//     const worker: Worker = { id: null, name: name, job: job, tel:tel, email: email, position: position, specification: specification, foto: foto  };
//     this.http
//       .post<{ message: string, workerId: string }>("http://localhost:3000/api/workers", worker)
//       .subscribe(responseData => {
//         const id = responseData.workerId;
//         worker.id = id;
//         this.workers.push(worker);
//         this.workersUpdated.next([...this.workers]);
//       });
//   }

  getAdminsListener() {
    return this.adminsUpdated.asObservable();
  }
}
