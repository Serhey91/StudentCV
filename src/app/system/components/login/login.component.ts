import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../../../shared/auth.service';
export class Message {
  constructor(public type: string, public text: string) {

  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  FormMessage: Message;
  UserForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.FormMessage = new Message(null, '');
    this.route.queryParams.subscribe((params: Params) => {
      if (params['accessDenied']) {
        this.showMessage({ type: 'danger', text: 'Please login to enter' });
      }
    });
    this.UserForm = new FormGroup(
      {
        login: new FormControl(null, Validators.required),
        password: new FormControl(null, [Validators.required, Validators.minLength(5)])
      }
    );
  }
  showMessage(message: Message) {
    this.FormMessage = message;
    setTimeout(() => { this.FormMessage.text = null; }, 2500);
  }
  onSubmit(userForm: FormGroup) {
    this.auth.logIn(userForm.value.login, userForm.value.password)
      .subscribe((data) => {
        setTimeout(() => {
          this.router.navigate(['/system/countries']);
        }, 1000);
      }, (err) => {
        setTimeout(() => {

          this.showMessage(
            {
              text: err,
              type: 'danger'
            }
          );
        }, 1000);
      });
  }
  signOut() {
    this.auth.logOut();
  }
}
