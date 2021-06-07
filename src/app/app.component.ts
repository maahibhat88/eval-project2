import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eval Project2';
  inputTextArea:string = "";
  inputEnable:boolean = false;
  items: string [] = ['Gina Williams','Jake Williams','Jamie John','John Doe','Jeff Stewart','Paula M. Keith'];

  addNote(){
    this.inputEnable = true;
  }
  
  reset(){
    this.inputTextArea = "";
    this.inputEnable = false;
  }

}
