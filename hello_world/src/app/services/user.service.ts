import { Injectable } from '@angular/core'
import { User } from '../models/user'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [
    new User('DUMMY_USER_ID1', 'yamada', 'テストだよ', false),
    new User('DUMMY_USER_ID2', 'tanaka', 'テストだよ2', false),
    new User('DUMMY_USER_ID3', 'hanayama', 'テストだよ3', false),
  ]

  constructor() {}

  getUsers(): User[] {
    return this.users
  }

  getUser(id: string): User {
    return this.users.find(user => user.id === id)
  }
}
