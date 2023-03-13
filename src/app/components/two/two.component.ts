import { Component, OnInit, VERSION } from "@angular/core";
import { SimpleDecorator } from "src/app/utils";

@SimpleDecorator({
  value1: '100',
  value2: '200'
})
@Component({
  selector: 'two-component',
  template: ''
})
export class TwoComponent implements OnInit {
  ngOnInit(): void {
    console.log(`%cTwoComponent`, `color: blue`);
    console.log(VERSION.major);
    console.log((this as any).value1);
    console.log((this as any).value2);
    console.log(`%c--------------`, `color: green`);
    console.log(`%c++++++++++++++`, `color: red`);
  }
}
