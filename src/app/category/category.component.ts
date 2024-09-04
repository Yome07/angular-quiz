import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../shared/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories: any[] = [];
  filteredCategories: any[] = [];
  categoryFilter: string = '';
  categorySelected!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoriesService: CategoryService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoriesService
      .getAllCategories(this.categoryFilter)
      .subscribe((categories) => {
        this.categories = categories;
        this.filteredCategories = categories;
      });
  }

  setCategorySelected(selected: string): void {
    this.categorySelected = selected;
    this.router.navigate(['/quiz/admin', this.categorySelected]);
  }

  search(filter: string): void {
    this.filteredCategories = this.categories.filter((category) =>
      category.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
}
