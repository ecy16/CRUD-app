import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { UsersComponent } from '../users/users.component';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: any[] = [
    {
      firstName: 'claire',
      lastName: 'nyambu',
      email: 'claire@gmail.com',
      county: '40',
    },
  ];

  constructor(private http: HttpClient) {}

  addUsers(data: any): any {
    console.log("Before pushing",this.users.length);
    this.users = [...this.users,data]
    console.log("After pushing",this.users.length)
  }

postUsers(data:any) : Observable<any> {
  
  return this.http.post<any>('http://localhost:3000/users',data)
  
}

getUsersList(){
  return this.http.get<any>('http://localhost:3000/users')
}

  // getUsersList(): any {
  //   return this.users;
  // }

  // addUsers( data: any) {
  //   return this.http.post(` http://localhost:3000/users`, data);
  // }
  
  updateUsers(county: number, data: any) {
    return this.http.put(` http://localhost:3000/users${county}`, data);
  }
  deleteUser(){
    return this.http.delete('http://localhost:3000/users');
  }
}
