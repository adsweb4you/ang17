import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detals',
  templateUrl: './detals.component.html',
  styleUrls: ['./detals.component.scss']
})
export class DetalsComponent implements OnInit {

  curStudent:any;

  Student = [

    {   id:1,
        name:"სტუდენტი",
        stip:true,
        course:"front-end",
        gender:"male",
        age:22,
        img:'https://www.interactivebrokers.com/images/web/open-student-acct-v2.jpg',
        status:"stoped"
    },

    {   id:2,
        name:"სტუდენტი",
        stip:true,
        img:'https://media.istockphoto.com/photos/facing-my-future-with-confidence-picture-id1139495117?k=20&m=1139495117&s=612x612&w=0&h=6P1Q43Oi_yERh9pMLki5LrkF3jaG82puPMeQdCoUNx8=',
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
        img:'https://pngimg.com/uploads/student/student_PNG66.png',
        age:22,
        status:"stoped"
    },

 ]


  constructor(
    private activerouter:ActivatedRoute,
    private router:Router
    ) {
       this.curStudent = this.Student.find((ind:any)=>{
         return  ind.id == this.activerouter.snapshot.paramMap.get('id')
       })
   }

  ngOnInit(): void {

   

  }

  back(){
   this.router.navigate(['/product', {
     name:"title",
     price:250,
   }])
  }

}
