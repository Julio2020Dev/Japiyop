import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JobHunter } from '../interfaces/user-options';

@Injectable({
  providedIn: 'root'
})
export class HunterService {
  private jobHunerCollection: AngularFirestoreCollection<JobHunter>;
  private jobHuner: Observable<JobHunter[]>;
  constructor(private db: AngularFirestore) { 
    this.jobHunerCollection = this.db.collection<JobHunter>('JobHunter');
    this.jobHuner = this.jobHunerCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }
    ));
  }

  getJobHunters() {
    // return this.jobHuner;
    return this.jobHunerCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }
    ));
  }

  getJobHunter(id: string) {
    return this.jobHunerCollection.doc<JobHunter>(id).valueChanges();
  }

  updateHunter(hunter: JobHunter, id: string) {
    return this.jobHunerCollection.doc(id).update(hunter);
  }

  addHunter(hunter: JobHunter) {
    return this.jobHunerCollection.add(hunter);
  }

  removeHunter(id: string) {
    return this.jobHunerCollection.doc(id).delete();
  }

  // sise(id: string) {
  //   return this.restauranteCollection.doc(id).update({ viernes_Descuento: '' });
  // }

  getP(tasks: string) {
    return this.db.collection<JobHunter>('JobHunter', ref => ref.where('activated', '==', true)).snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }
    ));
  }

  getDestacados() {
    return this.db.collection<JobHunter>('JobHunter', ref => ref.where('deactivated', '==', true)).snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }
    ));
  }

  getByName(tasks: string) {
    this.db.collection<JobHunter>('JobHunter');
    return this.db.collection<JobHunter>('JobHunter', ref => ref.where('name', '==', tasks)).valueChanges();
  }
}
