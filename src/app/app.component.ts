import { Component } from '@angular/core';


import {single} from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    view: any[] = [700, 400];
    data: any[];

    constructor() {
        this.data = single;
    }

    colorScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C']
    };

    onSelect(event) {
        console.log(event);
    }
}
