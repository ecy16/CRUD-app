import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersComponent } from '../users/users.component';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor(private http:HttpClient) { }

  addUsers(data:any):Observable<any>{    
    return this.http.post(' http://localhost:3000/users',data)
  }
  getUsersList():Observable<any>{
    return this.http.get(' http://localhost:3000/users')
  }
  updateUsers(county:number, data: any) {
    return this.http.put(` http://localhost:3000/users${county}`,data)
  }
  deleteUser(county:number):Observable<any>{
    return this.http.delete('http://localhost:3000/users')
  }
}

