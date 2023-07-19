import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersComponent } from './users/users.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UsersService } from './services/users.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'email',
    'county',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.getUsersList();
  }

  openAddEditUsersForm() {
    const dialogRef =this._dialog.open(UsersComponent)
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        console.log(val)
        if(val){
          this.getUsersList();
        }
      }
    })
  }

  getUsersList() {
    this._usersService.getUsersList().subscribe({
      next: (res) => {
        console.log(res.users);
        this.dataSource = new MatTableDataSource(res.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },

      error: (err) => {},
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openEditForm(data: any) {
    const dialogRef = this._dialog.open(UsersComponent, {
      data,
    
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getUsersList();
        }
      },
    });
  }
}

  /*
  deleteUser(county: number) {
    this._usersService.deleteUser(county).subscribe({
      next: (res) => {
        alert('user deleted successfuly');
        this.getUsersList();
      },
      error: console.log,
    });
  }
  }
*/