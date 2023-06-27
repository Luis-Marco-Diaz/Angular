
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Article } from '../model/article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrls: ['./article-new-reactive.component.css']
})

export class ArticleNewReactiveComponent implements OnInit {
  articleForm: FormGroup = new FormGroup ({});
  formInvalid: boolean = false;
  invalidImageUrl: boolean = false;

  constructor(private formBuilder: FormBuilder, private articleService: ArticleService) {}

  ngOnInit() {
    this.articleForm = this.formBuilder.group({
      name: ['', [Validators.required, this.nameArticleValidator]],
      imageUrl: ['', [Validators.required, Validators.pattern('^(https?://[a-zA-Z0-9]+\\.[a-zA-Z]{2,3})$')]],
      price: [0, [Validators.required, Validators.min(0.1)]],
      isOnSale: [false],
      quantityInCart: [0]
    });
  }

  onSubmit() {
    if (this.articleForm.valid) {
      const newArticle: Article = this.articleForm.value;
      this.articleService.create(newArticle).subscribe(() => {
        
        this.articleForm.reset(); // Reinicia el formulario después de enviarlo
      });
    } else {
      this.formInvalid = true;
      const imageUrlControl = this.articleForm.get('imageUrl');
      if (imageUrlControl?.invalid && imageUrlControl?.errors?.['pattern']) {
        this.invalidImageUrl = true;
      }
    }
  }

  nameArticleValidator(control: AbstractControl): ValidationErrors | null {
    const forbiddenNames = ['prueba', 'test', 'mock', 'fake'];
    const name = control.value?.toLowerCase();
    if (forbiddenNames.includes(name)) {
      return { forbiddenName: true, message: 'Los nombres fake, mock, prueba y test no son validos' };
    }
    return null;
  }
}














