import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router) { }

  //login user
  login(email: string, password: string){
    this.fireauth.signInWithEmailAndPassword(email, password).then(res => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['tabs']);
    }, err => {
        alert(err.message);
    });
  }

  //register user
  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(res => {
      alert('Registration successful');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
        this.router.navigate(['/cadastro']);
    });
  }

  //Sign in with Google
  googleSignIn(){
    // eslint-disable-next-line new-parens
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res => {

      this.router.navigate(['/tabs']);
      localStorage.setItem('token', JSON.stringify(res.user?.uid));

    }, err => {
      alert(err.message);
    });
  }

}
