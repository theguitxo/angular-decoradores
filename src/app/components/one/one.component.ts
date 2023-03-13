import { Component } from "@angular/core";
import { Subject, of, takeUntil } from "rxjs";
import { AutoDestroy } from "src/app/utils";

@Component({
  selector: 'one-component',
  template: `
    <div>ONE COMPONENT</div>
  `
})
export class OneComponent {
  @AutoDestroy destroy$: Subject<void> = new Subject<void>();

  ngOnInit(): void {
    of('example value').pipe(takeUntil(this.destroy$)).subscribe();
  }
}