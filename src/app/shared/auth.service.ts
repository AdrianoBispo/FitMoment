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

      // eslint-disable-next-line eqeqeq
      if(res.user?.emailVerified == true){
        this.router.navigate(['tabs']);
      } else {
        this.router.navigate(['/varify-email']);
      }

    }, err => {
        alert(err.message);
        this.router.navigate(['/login']);
    });
  }

  //register user
  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(res => {
      alert('Registration successful');
      this.router.navigate(['/login']);
      this.sendEmailForVarification(res.user);
    }, err => {
      alert(err.message);
        this.router.navigate(['/cadastro']);
    });
  }

  //forgotPassword user
  forgotPassword(email: string){
    this.fireauth.sendPasswordResetEmail(email).then(() => {
      this.router.navigate(['/varify-email']);
    }, err => {
      alert('Something went wrong');
    });
  }

  //E-mail Verification
  sendEmailForVarification(user: any) {
    user.sendEmailVarification().then((res: any) => {
      this.router.navigate(['/varify-email']);
    }, (err: any) => {
      alert('Something went wrong. Not able to sent mail to your email.');
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
