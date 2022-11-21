import { Component, OnInit } from '@angular/core';
import { routingAnimation } from 'src/app/shared/animations/rouuting';

@Component({
  selector: 'app-waiting-activation',
  templateUrl: './waiting-activation.component.html',
  styleUrls: ['./waiting-activation.component.scss'],
  animations:[routingAnimation]
})
export class WaitingActivationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
