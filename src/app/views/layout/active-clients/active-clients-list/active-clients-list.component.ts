import { Component, OnInit } from '@angular/core'; 
import { DomSanitizer } from '@angular/platform-browser';
import { SpinnerService } from 'src/app/shared/services/endpoints/spinner.service';
import { UsersService } from 'src/app/shared/services/endpoints/users.service';
import * as XLSX from 'xlsx'; 


@Component({
  selector: 'app-active-clients-list',
  templateUrl: './active-clients-list.component.html',
  styleUrls: ['./active-clients-list.component.scss']
})
export class ActiveClientsListComponent implements OnInit {

  usersList: any[] = [];

  numberRows:number = 10;
  currentPage: number = 1;
  showTable :boolean = false;
  reviewed:boolean = false;
// personalImg: any;
  constructor(private _userService: UsersService , private _sanitizer: DomSanitizer,private _spinnerService: SpinnerService) { }


  ngOnInit() {
  this._spinnerService.requestStarted();
    this._userService.getActiveClientsList().subscribe(res => {
     
      if(res.data != null)
        this.usersList = res.data ;
        this.showTable = this.usersList.length == 0 ?false : true;
console.log(this.usersList)
        this._spinnerService.requestEnded(); 


          //  this.personalImg = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
          //  + res.data.result.personalImage);


    })}

    view(user:any){
     user.isReviwed = false; 
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
