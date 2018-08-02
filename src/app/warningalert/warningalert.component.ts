import { Component } from '@angular/core';

@Component({
  selector: 'app-warningalert',
  template: `
        <h3>WARNING: You are in danger!</h3>
  `,
  styles: [`
        h3 {
            color: red;
            border: 1px solid red;
            background-color: mistyrose;
            height: 50px;
            width: 400px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
      `]
})
export class WarningAlertComponent {

}
