import { Component, OnInit, ViewChild,Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersComponent } from './users/users.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UsersService } from './services/users.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // myObservable = new Observable((observer) => {
  //   console.log('observable starts');
  //   observer.next('1');
  //   observer.next('2');
  //   observer.next('3');
  //   observer.next('4');
  //   observer.next('5');
  // });

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

  @Input() messageToChild: string | undefined;

  constructor(private _dialog: MatDialog, private api: UsersService) {}

  ngOnInit(): void {
    this.getUsersList();
    this.messageToChild = 'Hello'
    console.log(this.messageToChild);

  }

  openAddEditUsersForm() {
    const dialogRef = this._dialog.open(UsersComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        console.log('newly_added_user', val);
        this.getUsersList();

        // if (val) {
        //   this.getUsersList();
        // }
      },
    });
  }

  getUsersList() {
    this.api.getUsersList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
    });
  }
  editUser(row:any){
    this._dialog.open(UsersComponent,{
      data:row
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
