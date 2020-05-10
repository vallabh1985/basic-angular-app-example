import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {restictedNameCheck,validationWithParam} from './customValidtor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-validator-example';

  valForm=new FormGroup({
    firstName:new FormControl('',[Validators.required,restictedNameCheck,validationWithParam(/test/)])
  });

  get nameError(){return this.valForm.get('firstName');}

}
