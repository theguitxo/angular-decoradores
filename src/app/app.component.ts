import { Component, OnInit, Self } from '@angular/core';
import { OtherService, RandomService } from './app.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [RandomService],
  viewProviders: [OtherService]
})
export class AppComponent implements OnInit {
  showOne = false;
  showThree = false;
  randomNo!: string;

  constructor(
    @Self() private randomService: RandomService
  ) {}

  ngOnInit(): void {
    this.randomNo = this.randomService.RandomNo;
  }

  toogleOne(): void {
    this.showOne = !this.showOne;
  }

  toogleThree(): void {
    console.clear();
    this.showThree = !this.showThree;
  }
}
