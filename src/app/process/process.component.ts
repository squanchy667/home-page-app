import { Component, OnInit } from '@angular/core';
import { Process } from './process.model';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {
  proceses: Process[] = [
    new Process(1),
    new Process(2),
    new Process(3),
    new Process(4),
    new Process(5)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
