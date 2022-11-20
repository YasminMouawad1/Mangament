import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SpinnerService } from 'src/app/shared/services/endpoints/spinner.service';
import { UsersService } from 'src/app/shared/services/endpoints/users.service';
  
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-bulk-on-borading-list',
  templateUrl: './bulk-on-borading-list.component.html',
  styleUrls:['./bulk-on-borading-list.component.scss']
})
export class BulkOnBoradingListComponent implements OnInit {

  usersList: any[] = [];
  corpList:any[] = [];
  numberRows:number = 10;
  currentPage: number = 1;
  showTable :boolean = false;
  term:string = '';
  CorpCode!:number;      
 

  constructor(private _userService: UsersService ,private _spinnerService: SpinnerService) { }


  ngOnInit() {
  this._spinnerService.requestStarted();
    this._userService.getBulkBorading().subscribe(res => {
      
      if(res.data != null)
        this.corpList = res.data ; 
        this.showTable = this.corpList?.length == 0 ?false : true

         
    this._spinnerService.requestEnded();
    })

    console.log(this.corpList)
  }

    exportexcel(): void
    { 
      let element = document.getElementById('excel-table');
      const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
    
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    
      XLSX.writeFile(wb, 'ExcelSheet.xlsx');
   
    }

    viewDetails(code:number){
      this._spinnerService.requestStarted();
       this._userService.getCorpProfilePlus(code).subscribe(res => {
         
         if(res.data != null)
           this.usersList = res.data ; 
           console.log(this.usersList)
           this.showTable = this.usersList?.length == 0 ?false : true
   
            
       this._spinnerService.requestEnded();
      })
    }

    
  

}
