import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class RandomService {
  private _randomNo = '';
 
  constructor() {
    console.log('AppService Constructed');
    this._randomNo = 'App ' + Math.floor(Math.random() * 1000 + 1);
  }
 
  get RandomNo() {
    return this._randomNo;
  }
}

export class OtherService {
  text = '';

  constructor() {
    console.log('Other service constructor');
    this.text = 'other service';
  }
}
