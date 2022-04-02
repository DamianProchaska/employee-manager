import { Injectable, ModuleWithComponentFactories } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Worker } from "../worker.model";

@Injectable({ providedIn: 'root' })
export class WorkersService {
  private workers: Worker[] = [];
  private workersUpdated = new Subject<Worker[]>();

  constructor(private http: HttpClient) { }

  getWorkers() {
    this.http.get<{ message: string, workers: Worker[] }>('http://localhost:3000/api/workers')
      .subscribe((workersData) => {
        this.workers = workersData.workers;
        this.workersUpdated.next([...this.workers]);
      });
  }

  addWorker(name: string, job: string, domain: string, project: string, email: string, lphone: string, mphone: string, foto: string, stand: number) {
    const worker: Worker = { id: null, name: name, job: job, domain: domain, project: project, email: email, lphone: lphone, mphone: mphone, foto: foto, stand: stand };
    this.http
      .post<{ message: string, workerId: string }>("http://localhost:3000/api/workers", worker)
      .subscribe(responseData => {
        const id = responseData.workerId;
        worker.id = id;
        this.workers.push(worker);
        this.workersUpdated.next([...this.workers]);
      });
  }

  editWorker(id: string, name: string, job: string, domain: string, project: string, email: string, lphone: string, mphone: string, foto: string, stand: number) {
    const worker: Worker = { id: id, name: name, job: job, domain: domain, project: project, email: email, lphone: lphone, mphone: mphone, foto: foto, stand: stand };
    this.http
      .put<{ message: string, workerId: string }>("http://localhost:3000/api/workers/" + id, worker)
      .subscribe(responseData => {
        this.workersUpdated.next([...this.workers]);
      });
  }

  deleteWorker(id: string) {
    this.http
      .delete<{ message: string }>("http://localhost:3000/api/workers/" + id)
      .subscribe(() => {
        const updatedWorkers = this.workers.filter((user) => user.id !== id);
        this.workers = updatedWorkers;
        this.workersUpdated.next([...this.workers]);
      });
  }

  getWorkersListener() {
    return this.workersUpdated.asObservable();
  }
}
