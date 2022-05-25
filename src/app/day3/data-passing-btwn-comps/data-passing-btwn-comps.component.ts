import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-passing-btwn-comps',
  templateUrl: './data-passing-btwn-comps.component.html',
  styleUrls: ['./data-passing-btwn-comps.component.css']
})
export class DataPassingBtwnCompsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  name!: string;
}
