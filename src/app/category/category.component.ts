import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../shared/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories!: any[]; 
  categoryFilter!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoriesService: CategoryService
  ) { }

  ngOnInit(): void {
    // ICI ALIMENTER this.categories = l'obserbver du service (recup le name des categ en fct de l input de la barre de recherche)
    this.route.params.subscribe(params => {
      // this.categoryService.;
    });

    this.categoriesService.getAllCategories(this.categoryFilter)
    // this.categories = this.categoriesService.categories
    this.categories = [];
  }
}
