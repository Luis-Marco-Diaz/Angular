import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';


  showArticleList: boolean = true;
  showNewArticleTemplate: boolean = false;
  showNewArticleReactive: boolean = false;

  toggleShowArticleList(): void {
    this.showArticleList = true;
    this.showNewArticleTemplate = false;
    this.showNewArticleReactive = false;
  }

  toggleShowNewTemplate(): void {
    this.showNewArticleTemplate = true;
    this.showNewArticleReactive = false;
    this.showArticleList = false;
  }

  toggleShowNewReactive(): void {
    this.showNewArticleReactive = true;
    this.showNewArticleTemplate = false;
    this.showArticleList = false;
  }
 
}

