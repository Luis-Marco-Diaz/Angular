import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Article } from './model/article';
//import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  //private articles: Article[] = [];
  private apiUrl = 'http://localhost:3000/api/articles';

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    //return of(this.articles);
    return this.http.get<Article[]>(this.apiUrl);
  }

  create(article: Article): Observable<any> {
    //this.articles.push(article);
    //return of(null);
    return this.http.post(this.apiUrl, article);
  }

  changeQuantity(articleID: number, changeInQuantity: number): Observable<Article | null> {
    /*return this.getArticles().pipe(
      map(articles => {
        const article = articles.find(a => a.id === articleID);
        if (article) {
          article.quantityInCart += changeInQuantity;
          return article;
        }
        return null;
      })
    );*/
    const url = `${this.apiUrl}/${articleID}`;
    return this.http.patch<Article | null>(url, { changeInQuantity });
  }


  getArticleById(articleId: number): Observable<Article | null> {
    /*return this.getArticles().pipe(
      map(articles => articles.find(article => article.id === articleId) || null)
    );
  }*/
  const url = `${this.apiUrl}/${articleId}`;
  return this.http.get<Article | null>(url);


}}

