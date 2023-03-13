import { Component, Host, Optional, Self } from "@angular/core";
import { OtherService, RandomService } from "../../app.services";

@Component({
  selector: 'service-component',
  template: `
    <div>{{ randomNo }}</div>
    <div>&gt;&gt;{{ otherText }}</div>
  `,
  providers: [RandomService]
})
export class ServiceComponent {
  randomNo!: string;
  otherText!: string;

  constructor(
    @Self() private randomService: RandomService,
    @Optional() @Host() private otherService: OtherService
  ) {
    this.randomNo = this.randomService.RandomNo;
    this.otherText = this.otherService?.text;
  }
}