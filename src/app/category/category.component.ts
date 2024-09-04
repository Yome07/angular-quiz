import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../shared/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories = this.categoriesService.categories; 
  categoryFilter: string = '';
  categorySelected!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoriesService: CategoryService
  ) {
    this.categoriesService.getAllCategories(this.categoryFilter)
  }

  ngOnInit(): void {
    // ICI ALIMENTER this.categories = l'obserbver du service (recup le name des categ en fct de l input de la barre de recherche)
    this.route.params.subscribe(params => {
      // this.categoryService.;
    });
    console.log(this.categories)
  }

  setCategorySelected(selected: any): void {
    this.categorySelected = selected
    this.router.navigate(['/quiz/admin', this.categorySelected]);
  }

  search(filter: any): void {
    this.categoriesService.getAllCategories(filter)
  }
}
