import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Applicant } from '../interfaces/user-options';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private applicantCollection: AngularFirestoreCollection<Applicant>;
  private applicant: Observable<Applicant[]>;
  
  constructor(private db: AngularFirestore) { 
    this.applicantCollection = this.db.collection<Applicant>('Applicant');
    this.applicant = this.applicantCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }
    ));
  }

  getApplicants() {
    return this.applicant;
  }

  getApplicant(id: string) {
    return this.applicantCollection.doc<Applicant>(id).valueChanges();
  }

  updateApplicant(hunter: Applicant, id: string) {
    return this.applicantCollection.doc(id).update(hunter);
  }

  addApplicant(hunter: Applicant) {
    return this.applicantCollection.add(hunter);
  }

  removeApplicant(id: string) {
    return this.applicantCollection.doc(id).delete();
  }

  // sise(id: string) {
  //   return this.restauranteCollection.doc(id).update({ viernes_Descuento: '' });
  // }

  getP(tasks: string) {
    return this.db.collection<Applicant>('Applicant', ref => ref.where('activated', '==', true)).snapshotChanges().pipe(map(
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
    return this.db.collection<Applicant>('Applicant', ref => ref.where('deactivated', '==', true)).snapshotChanges().pipe(map(
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
    this.db.collection<Applicant>('Applicant');
    return this.db.collection<Applicant>('Applicant', ref => ref.where('name', '==', tasks)).valueChanges();
  }
}
