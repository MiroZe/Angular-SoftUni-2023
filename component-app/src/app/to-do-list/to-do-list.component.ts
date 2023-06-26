import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent {
  @Input('allTasks') allTasks: string[] | undefined;
  isChecked: boolean = true;
  isEdited: boolean = false;
  valueToChange: any = '';

  completeTask(event: Event) {
    const target = event.target as HTMLElement;
    const parent = target.parentElement?.parentElement;
    const textToEdit :any = target.closest('li')?.firstChild?.textContent?.trim();
    
    
  
    const n = textToEdit !== undefined ? this.allTasks?.indexOf(textToEdit) : -1;

    if (target.className.includes('complete')) {
      if (parent?.className == 'completed') {
        parent.classList.remove('completed');
      } else {
        parent?.classList.add('completed');
      }
    } else if (target.className.includes('delete')) {
      if (n !== undefined && n !== -1) {
        this.allTasks?.splice(n, 1);
      }

      parent?.remove();
    } else if (target.className.includes('edit')) {
      this.isEdited = true;
      this.valueToChange = textToEdit;
    }
  }

  updateTask(value: string, valueToChange: string) {
    let index;
    if (valueToChange !== '') {
      index =
        this.valueToChange !== undefined
          ? this.allTasks?.indexOf(this.valueToChange)
          : -1;
      if (index !== undefined && index !== -1) {
        this.allTasks?.splice(index, 1, value);
        this.isEdited = false;
      }
    }
  }
  backToTasks(event: Event) {
    this.isEdited = false;
  }
}
