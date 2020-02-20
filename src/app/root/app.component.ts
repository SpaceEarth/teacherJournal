import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentUrl: string;

  ngOnInit() {
    this.currentUrl = 'students';
  }

  handleRoute(event): void {
    if (event.target.tagName === "LI") {
      this.currentUrl = event.target.textContent;
    }
  }
}
