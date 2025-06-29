export class User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  mobNo: string;
  password: string;
  roles: [
    {
      id: number;
    }
  ];
  constructor() {
    this.id = 0;
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.mobNo = '';
    this.password = '';
    this.roles = [{ id: 0 }];
  }
}
