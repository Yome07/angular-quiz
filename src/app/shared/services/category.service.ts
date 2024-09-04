import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories!:any[]

  constructor(private http: HttpClient) { }

  getAllCategories(categoryFilter: string): void {
    this.http
      .get(`http://localhost:3000/categories/${categoryFilter}`)
      .subscribe((categories: any) => {
        this.categories = categories
      });
  }
}
