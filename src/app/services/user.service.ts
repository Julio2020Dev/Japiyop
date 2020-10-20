import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Applicant } from '../interfaces/user-options';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private applicantCollection: AngularFirestoreCollection<Applicant>;
  private applicant: Observable<Applicant[]>;
  
  constructor(
    private db: AngularFirestore,
    private auth: AngularFireAuth
    ) { 
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
  getCurrentUser(){
    return this.auth.currentUser.then(res=>{
      return res;
    }).catch(error=>{
      return error;
    })
  }
  getApplicants() {
    return this.applicant;
  }

  getApplicant(id: string) {
    return this.applicantCollection.doc<Applicant>(id).valueChanges();
  }

  updateApplicant(applicant: Applicant, id: string) {
    return this.applicantCollection.doc(id).update(applicant);
  }

  addApplicant(applicant: Applicant) {
    return this.applicantCollection.add(applicant);
  }

  removeApplicant(id: string) {
    return this.applicantCollection.doc(id).delete();
  }
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
