import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}
}
