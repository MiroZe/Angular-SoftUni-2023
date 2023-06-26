import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TO DO App';

  task : string = '';
  allTasks : Array<string> = []


  emittedValue(value:string) {
    this.task = value;
    this.allTasks.push(this.task)
   
    
  }



}
