import { Component,  OnInit } from '@angular/core';
import { Article } from "../model/article";
import { ArticleService } from '../article.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})

export class ArticleItemComponent implements OnInit{
  public article!: Article;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.article = {
      id:1,
      name: 'Lampara Astronauta',
      //imageUrl: 'http://via.placeholder.com/150x150',
      imageUrl: '/assets/images/lampara-astronauta.jpg',
      price: 19,
      isOnSale: true,
      quantityInCart: 0
    };
  }

  incrementInCart() {
    this.article.quantityInCart++;
  }

  decrementInCart() {
    if (this.article.quantityInCart > 0) {
      this.article.quantityInCart--;
    }
  }
}


