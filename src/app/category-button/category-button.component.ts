import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-category-button',
  templateUrl: './category-button.component.html',
  styleUrls: ['./category-button.component.scss']
})
export class CategoryButtonComponent {
  @Input() category!: string;
  @Output() categorySelected = new EventEmitter<string>;

  setQuizCategory(): void {
    this.categorySelected.emit(this.category)
  }
}
