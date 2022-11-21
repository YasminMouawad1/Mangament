import { Component, OnInit } from '@angular/core';
import { routingAnimation } from 'src/app/shared/animations/rouuting';

@Component({
  selector: 'app-waiting-risk-approval',
  templateUrl: './waiting-risk-approval.component.html',
  styleUrls: ['./waiting-risk-approval.component.scss'],
  animations:[routingAnimation]
})
export class WaitingRiskApprovalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
