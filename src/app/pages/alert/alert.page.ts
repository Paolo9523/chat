import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage {

  isAlertOpen = false;
  alertButtons = ['Action'];

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
  constructor() { }

  ngOnInit() {
  }

}