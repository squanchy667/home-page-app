import { Component, OnInit } from '@angular/core';
import { Miss } from './mission.model';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {
  missions: Miss[] = [
    new Miss('101', 'עודכן לאחרונה:19.1.2020'),
    new Miss('מוצרים פנסיונים', 'עודכן לאחרונה:19.1.2020'),
    new Miss('מסמכים לחתימה', 'עודכן לאחרונה:19.1.2020'),
    new Miss('טפסים דינאמים', 'עודכן לאחרונה:19.1.2020 '),
    new Miss('החזרי הוצאות', 'עודכן לאחרונה:19.1.2020')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
