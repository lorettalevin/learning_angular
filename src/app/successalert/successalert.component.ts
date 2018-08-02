import { Component } from '@angular/core';

@Component({
  selector: 'app-successalert',
  templateUrl: './successalert.component.html',
  styles: [`
        h3 {
            color: green;
            border: 1px dotted green;
            background-color: rgb(177, 208, 188);
            height: 50px;
            width: 400px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
      `]
})
export class SuccessAlertComponent {

}
