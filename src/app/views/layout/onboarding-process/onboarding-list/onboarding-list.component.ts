import { Component, OnInit } from '@angular/core'; 
import { DomSanitizer } from '@angular/platform-browser';
import { SpinnerService } from 'src/app/shared/services/endpoints/spinner.service';
import { UsersService } from 'src/app/shared/services/endpoints/users.service';
import * as XLSX from 'xlsx'; 


@Component({
  selector: 'app-onboarding-list',
  templateUrl: './onboarding-list.component.html',
  styleUrls: ['./onboarding-list.component.scss']
})
export class OnboardingListComponent implements OnInit {

  usersList: any[] = [];

  numberRows:number = 10;
  currentPage: number = 1;
  showTable :boolean = false;
  reviewed:boolean = false;
// personalImg: any;
  constructor(private _userService: UsersService , private _sanitizer: DomSanitizer,private _spinnerService: SpinnerService) { }


  ngOnInit() {
  this._spinnerService.requestStarted();
    this._userService.getOnboardingProcessClients().subscribe(res => {
     
      if(res.data != null)
        this.usersList = res.data ;
        this.showTable = this.usersList.length == 0 ?false : true;
 
        console.log(res.data)
        this._spinnerService.requestEnded(); 
 


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
