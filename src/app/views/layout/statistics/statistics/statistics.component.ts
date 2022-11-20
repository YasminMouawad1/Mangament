import { Component, OnInit } from '@angular/core';
import { routingAnimation } from 'src/app/shared/animations/rouuting';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  animations:[routingAnimation]
})
export class StatisticsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
