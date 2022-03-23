import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Student = [

    {   id:1,
        name:"სტუდენტი",
        stip:true,
        course:"front-end",
        gender:"male",
        age:22,
        img:'pohto.png',
        status:"stoped"
    },

    {   id:2,
        name:"სტუდენტი",
        stip:true,
        img:'',
        course:"front-end",
        gender:"male",
        age:24,
        status:"active"
    },

    {   id:3,
        name:"სტუდენტი1",
        stip:true,
        course:"back-end",
        gender:"male",
        img:'img/car.png',
        age:22,
        status:"stoped"
    },

 ]

}
