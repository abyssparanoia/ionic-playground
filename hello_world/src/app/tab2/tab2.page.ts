import { Component } from '@angular/core'
import { User } from '../models/user'
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  users: User[]

  constructor(private userService: UserService) {}

  user = new User('DUMMY_USER_ID', 'yamada', 'テストだよ', false)

  ngOnInit() {
    this.users = this.userService.getUsers()
  }
}
