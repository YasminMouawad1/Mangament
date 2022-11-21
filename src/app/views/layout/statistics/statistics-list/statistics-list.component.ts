import { Component, OnInit } from '@angular/core'; 
import { DomSanitizer } from '@angular/platform-browser';
import { SpinnerService } from 'src/app/shared/services/endpoints/spinner.service';
import { UsersService } from 'src/app/shared/services/endpoints/users.service';
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-statistics-list',
  templateUrl: './statistics-list.component.html',
  styleUrls: ['./statistics-list.component.scss']
})
export class StatisticsListComponent implements OnInit {

  usersList:any= {};

  numberRows:number = 10;
  currentPage: number = 1;
  showTable :boolean = false;
  reviewed:boolean = false;

  constructor(private _userService: UsersService , private _sanitizer: DomSanitizer,private _spinnerService: SpinnerService) { }
  
  ngOnInit() {
    this._spinnerService.requestStarted();

      this._userService.getStatisticsList().subscribe(res => {
       
        if(res.data != null)
          this.usersList = res.data ;
          this.showTable = this.usersList ==  null ?false : true;
    
          this._spinnerService.requestEnded(); 
  
  
      })}
  
       
  
      exportexcel(): void
    { 
      let element = document.getElementById('excel-table');
      const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
    
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    
      XLSX.writeFile(wb, 'ExcelSheet.xlsx');
   
    }

}
