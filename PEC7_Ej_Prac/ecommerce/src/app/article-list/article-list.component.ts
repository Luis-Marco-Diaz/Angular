import { Component, OnInit } from '@angular/core';
import { ArticleItemComponent } from '../article-item/article-item.component';
import { Article } from "../model/article";
import { ArticleService } from '../article.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DefaultImagePipe } from '../default-image.pipe';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})

export class ArticleListComponent implements OnInit {
  articles$!: Observable<Article[]>;
  public article!: Article;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articles$ = this.articleService.getArticles();
    this.filterArticles('');

  }
  arrayArticle = [
    { component: ArticleItemComponent, isOnSale: false },
    { component: ArticleItemComponent, isOnSale: true },
    { name: 'Article 1', isOnSale: true },
    { name: 'Article 2', isOnSale: true },
    { name: 'Article 3', isOnSale: false }
  ];

  changeQuantity(article: Article, changeInQuantity: number) {
    this.articleService.changeQuantity(article.id, changeInQuantity)
      .subscribe(updatedArticle => {
        if (updatedArticle) {
          // El artículo se actualizó correctamente
          console.log('Cantidad cambiada:', updatedArticle);
        } else {
          // No se encontró el artículo ocurrirá si el ID no existe
          console.log('No se pudo cambiar la cantidad del artículo.');
        }
      });
  }

  filterArticles(filterText: string) {
    if (filterText !== null) {
      this.articles$ = this.articleService.getArticles().pipe(
        map((articles: Article[]) => articles.filter((article: Article) => article.name.toLowerCase().includes(filterText.toLowerCase())))
      );
    }
  }
}
