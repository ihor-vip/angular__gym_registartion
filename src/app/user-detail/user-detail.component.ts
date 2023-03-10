import {Component, OnInit} from '@angular/core';
import {ApiService} from "../services/api.service";
import {User} from "../models/user.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit{
  public userId!: number;
  public userDetail!: User;
  constructor(private api: ApiService, private activatedRoute : ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(val => {
      this.userId = val['id'];
      this.fetchUserDetails(this.userId);
    })
  }

  fetchUserDetails(userId: number) {
    this.api.getRegisteredUserId(userId).subscribe(res => {
      this.userDetail = res;
    })
  }
}
