import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/shared/services/endpoints/spinner.service';
import { UsersService } from 'src/app/shared/services/endpoints/users.service';

import * as XLSX from 'xlsx';

@Component({
  selector: 'app-users-list-permanent-rejected',
  templateUrl: './users-list-permanent-rejected.component.html',
})
export class UsersListPermanentRejectedComponent implements OnInit {
  usersList: any[] = [];
  showTable :boolean = false;
  numberRows:number = 10;
  currentPage: number = 1;

// personalImg: any;
  constructor(private _userService: UsersService ,private _spinnerService: SpinnerService) { }

  ngOnInit() {
  this._spinnerService.requestStarted();
    debugger

     this._userService.getRiskPermanentRejectedProfileList().subscribe(res => { 
     this._spinnerService.requestEnded();
     if(res.data != null){
      this.usersList = res.data ; 
      this.showTable = this.usersList.length == 0 ? false : true
      
     }
      

 
    },(error) => {
      this._spinnerService.requestEnded();
    }
      )

      this._spinnerService.requestEnded();

  }
  
  exportexcel(): void
  { 
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
  
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
    XLSX.writeFile(wb, 'ExcelSheet.xlsx');
 
  }

}
