import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 10;
  showcard = false;
  myshadow = 'shadow-lg';

  clasobj =  [
    'shadow-lg','rounded','p-5' 
  ]

  styles = {
    color:"red",
    textTransform:'uppercase'
  }

  img  = 'assets/img/mine.png'
 

  myname(y:any){
    return y
  }

  padd(bsclass:any){
    this.clasobj[2]  = bsclass;
    this.styles.textTransform  = 'lowercase';  
  }

  showdiv(){
   this.showcard = !this.showcard;
  }


  User = [
    "admin",
    "administrator",
    "dark",
    "test"
  ]

}
