import { User } from './User';

export class UserResponse {

  constructor( public token: string, public user: User) {
  }
}
