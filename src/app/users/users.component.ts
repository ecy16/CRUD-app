import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  userForm: FormGroup;
  router: any;
  form: any;
  data: any;

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private dialogRef: DialogRef<UsersComponent>,

  ) {
    this.userForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      county: '',
    });
  }


  onFormSubmit(){
    if (this.userForm.valid) {
      if (this.data) {
        this.userService.updateUsers(this.data.id, this.userForm.value).subscribe({
            next: (data: any) => {
              this.dialogRef.close();
            },
            error: (err: any) => {
              console.error(err);
            },
          });
        
      } else {
        this.userService.addUsers(this.userForm.value).subscribe({
          next: (data: any) => {
            alert('user added successfully')},
          error: (err: any) => {
            console.error(err);
          },
        });
      }

    }
  }
}






    