import { Component, OnInit } from '@angular/core';
import { message } from './application.model';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  mess: message[] = [
    new message('יוסי', 'טס לתאילנד'),
    new message('שמואל','חולה קיבל פתק מהרופא זה לא קורונה'),
    new message('משה','רוצה ללכת לברית של אחיין שלו'),
    new message('חיים','חי את החלום')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
