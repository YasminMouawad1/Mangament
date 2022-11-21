import { Component, OnInit } from '@angular/core';
import { routingAnimation } from 'src/app/shared/animations/rouuting';

@Component({
  selector: 'app-active-clients',
  templateUrl: './active-clients.component.html',
  styleUrls: ['./active-clients.component.scss'],
  animations:[routingAnimation]
})
export class ActiveClientsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
