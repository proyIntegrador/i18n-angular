import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstname:string = 'Andrés';
  lastname:string = 'Castro';
  goals:number = 0;

  inc(i:number){
    this.goals = Math.min(5,Math.max(0,this.goals + i));
  }
}
