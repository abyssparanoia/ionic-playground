import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { UserService } from 'src/app/services/user.service'
import { User } from 'src/app/models/user'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit {
  id: string
  user: User

  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.id = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit() {
    this.user = this.userService.getUser(this.id)
  }
}
