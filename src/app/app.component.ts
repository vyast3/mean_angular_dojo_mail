import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Dojo Email';
  heading:string = "Dojo Mail";

  emailsObj = [
    {"email": "bill@gates.com", "importance": true, "subject": "New Windows", "content": "WindowsXI will launch in year 2100"},
    {"email": "ada@lovelace.com", "importance": true, "subject": "Programming", "content": "Enchantress of Numbers"},
    {"email": "john@carmac.com", "importance": false, "subject": "Updated Algo", "content": "New algorithm for shadow volumes"},
    {"email": "gabe@newel.com", "importance": false, "subject": "HL3", "content": "Just Kidding!"}
  ]

  // emailsObj = {
  //   email:["bill@gates.com","ada@lovelace.com","john@carmac.com","gabe@newel.com"],
  //   importance:[true,true,false,false],
  //   subject:["New Windows","Programming","Updated Algo","HL3"],
  //   content:["WindowsXI will launch in year 2100","Enchantress of Numbers","New algorithm for shadow volumes","Just Kidding!"]
  // }


}

