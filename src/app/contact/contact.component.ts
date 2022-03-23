import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Contact = new FormGroup({
  title: new FormControl('', [Validators.minLength(25)]),
  email: new FormControl('', [Validators.email])
  })

 get title(){
    return this.Contact.get('title')
 }

 get email(){
  return this.Contact.get('email')
}

setval(){
  this.Contact.patchValue({
    title: '5465465',
    email: 'infoasf@saf,ge'
  })
}

  subm(){
    
    console.log(this.Contact.value);
  }

}
