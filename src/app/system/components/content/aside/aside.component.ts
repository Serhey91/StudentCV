import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../shared/auth.service';

@Component({
  selector: 'app-content-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  isAuth: boolean;
  constructor(private auth: AuthService) { }

  ngOnInit() {
   
  }


}
