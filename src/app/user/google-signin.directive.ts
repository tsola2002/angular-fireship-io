import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';


@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {
  constructor(private afAuth: AngularFireAuth) { }

  // this is the event handler
  @HostListener('click')
  onclick() { 
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
