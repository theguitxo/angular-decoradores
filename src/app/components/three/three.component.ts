import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
import { DatosDecorator, OnInitDecorator } from "src/app/utils";

@OnInitDecorator()
@Component({
  selector: 'three-component',
  template: `
    <div>{{ dato }}</div>
  `
})
export class ThreeComponent implements OnInit, OnChanges, OnDestroy {
  @Input() dato!: string;

  ngOnInit(): void {
    console.log('Three: On Init');
    this.prueba();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Three: On Changes');
  }

  ngOnDestroy(): void {
    console.log('Three: On Destroy');
  }

  @DatosDecorator()
  prueba(): void {
    console.log('prueba');
  }
}
