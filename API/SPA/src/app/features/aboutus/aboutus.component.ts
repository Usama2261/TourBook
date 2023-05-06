import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: 'aboutus.component.html',
  styleUrls: ['aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  members = [
    { name: "Sadia Naz", rollNo: "F16-0788"},
    { name: "Laiba Mehboob", rollNo: "F19-0859"},
    { name: "Mehboob Khab", rollNo: "F19-0859"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
