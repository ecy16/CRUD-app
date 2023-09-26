import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

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
actionBtn:string = 'save';
  constructor(
    private fb: FormBuilder,
    private api: UsersService,
    @Inject(MAT_DIALOG_DATA) public editData:any,
    private dialogRef: DialogRef<UsersComponent>

  ) {
    this.userForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      county: '',
    });
if(this.editData){
  this.actionBtn = 'update'
  this.userForm.controls['firstName'].setValue(this.editData.firstName)
  this.userForm.controls['lastName'].setValue(this.editData.lastName)
  this.userForm.controls['email'].setValue(this.editData.email)
  this.userForm.controls['county'].setValue(this.editData.county)



}
  }

 
  onFormSubmit() {
    this.api.postUsers(this.userForm.value)
    .subscribe({
      next: (data: any) => {
        alert('users added');
        this.userForm.reset();
        this.dialogRef.close();
      },
      error: (err: any) => {
        console.log('error====', err);
      },
    });

    // this.api.getUsers(this.userForm.value).subscribe({
    //   next: (data: any) => {
    //     alert('users added');
    //     this.dialogRef.close();
    //   },
    //   error: (err: any) => {
    //     console.error(err);
    //   },
    // });
    //   if (this.userForm.valid) {
    //     if (this.data) {
    //       this.userService
    //         .updateUsers(this.data.id, this.userForm.value)
    //         .subscribe({
    //           next: (data: any) => {
    //             this.dialogRef.close();
    //           },
    //           error: (err: any) => {
    //             console.error(err);
    //           },
    //         });
    //     } else {

    //     }
    //   }
    // }
  }
}
