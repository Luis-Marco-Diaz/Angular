/*import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';

@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrls: ['./article-new-template.component.css']
})
export class ArticleNewTemplateComponent {
  article: Article;

  constructor() {
    this.article = {
      name: '',
      imageUrl: '',
      price: 0,
      isOnSale: false,
      quantityInCart: 0
    };
  }

  onSubmit() {
    // Aquí puedes realizar alguna acción con los datos del formulario, como enviarlos a un servicio o mostrarlos en la consola
    console.log('Form submitted', this.article);
  }
}*/


import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Article } from '../model/article';

@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrls: ['./article-new-template.component.css']
})
export class ArticleNewTemplateComponent implements OnInit {
  articleForm!: FormGroup;
  formInvalid: boolean = false;
  invalidImageUrl: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.articleForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0.1)]],
      imageUrl: ['', [Validators.required, Validators.pattern('^(https?://[a-zA-Z0-9]+\\.[a-zA-Z]{2,3})$')]],
      isOnSale: [false],
      quantityInCart: [0]
    });
  }

  onSubmit() {
    if (this.articleForm.valid) {
      console.log('Form submitted', this.articleForm.value);
    } else {
      //this.articleForm.markAllAsTouched();
      this.formInvalid = true;
      const imageUrlControl = this.articleForm.get('imageUrl');
    if (imageUrlControl?.invalid && imageUrlControl?.errors?.['pattern']) {
      this.invalidImageUrl = true;

    }
    }
  }
}

