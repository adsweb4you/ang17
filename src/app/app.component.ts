import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 10;
  showcard = true;

  myname(y:any){
    return y
  }

  showdiv(){
   this.showcard = false;
  }

}
