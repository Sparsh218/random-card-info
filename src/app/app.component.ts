import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/service/user-service.service';
import { ToastrService } from 'ngx-toastr';
import { User } from './model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor (private userService: UserServiceService,
    private toaster: ToastrService) {}

  user: User;

  title = 'random-card-info';

  ngOnInit(): void {
      
    this.userService.getUserInfo().subscribe(
      (userInfo: any) => {
      this.user = userInfo.results[0];
    }, (err) => {
      console.log("error");
    }
    );

  }
}
