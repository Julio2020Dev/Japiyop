import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class CheckTutorial implements CanLoad {
  constructor(private storage: Storage, private router: Router) {}

  canLoad() {
    return this.storage.get('ion_did_tutorial').then(res => {

      console.log('Check Tutorial!');
      if (res) {
        this.storage.get('usertype').then((value) => {
          if(value == 'applicant'){
            this.router.navigate(['/app', 'tabs', 'home']);
          }else{
            this.router.navigate(['/hunter-home']);
          }
        });
        return false;
      } else {
        return true;
      }
    });
  }
}
