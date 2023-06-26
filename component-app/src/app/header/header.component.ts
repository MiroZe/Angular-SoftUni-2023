import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent {

  @Output() valueEmit = new EventEmitter<string>()


  newToDo : string = ''

  



  addNewToDo(value: string) : void {

    if(value !== '') {
      this.valueEmit.emit(value)

      this.newToDo = ''
      
    }

  }

}
