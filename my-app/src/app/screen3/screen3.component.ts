import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen3',
  templateUrl: './screen3.component.html',
  styleUrls: ['./screen3.component.scss']
})
export class Screen3Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onclick($event){
    this.router.navigate(['screen1']);
  }
}
