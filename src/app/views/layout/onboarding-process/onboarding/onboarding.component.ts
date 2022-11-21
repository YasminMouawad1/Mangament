import { Component, OnInit } from '@angular/core';
import { routingAnimation } from 'src/app/shared/animations/rouuting';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
  animations:[routingAnimation]
})
export class OnboardingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
