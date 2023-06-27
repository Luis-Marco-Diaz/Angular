import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() showArticleListEvent = new EventEmitter<void>();
  @Output() showArticleNewTemplateEvent = new EventEmitter<void>();
  @Output() showArticleNewReactiveEvent = new EventEmitter<void>();

  toggleShowArticleList(): void {
    this.showArticleListEvent.emit();
  }

  toggleShowNewTemplate(): void {
    this.showArticleNewTemplateEvent.emit();
  }

  toggleShowNewReactive(): void {
    this.showArticleNewReactiveEvent.emit();
  }
}

/**AQUI SE PODRIA TOCAR COSAS PARA EL NAV BAR */