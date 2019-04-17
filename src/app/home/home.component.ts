import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "Add the questions you would like to add to a quiz";

  addQuestion = {
    question : "Capital of Iceland?",
    option1 : "Reykjavík",
    option2 : "Dubrovnik",
    option3 : "Limerick",
    option4 : "Cardiff",
    answer : "Reykjavík"
  };


  alertMe(val){
    alert(val);
  };

  constructor() { }

  ngOnInit() {
  }

}
