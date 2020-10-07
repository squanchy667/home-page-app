import { Component, OnInit } from '@angular/core';
import { Atend } from './attandance.model';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  atenndance: Atend[] = [
    new Atend('יוסי' , true),
    new Atend('חיים' , true),
    new Atend('איציק' , true),
    new Atend('שלמה' , true),
    new Atend('משה' , true)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
