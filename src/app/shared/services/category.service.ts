import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories!: any;

  constructor(private http: HttpClient) { }

  getAllCategories(categoryFilter: string): Observable<any> {
    return this.http.get(`http://localhost:3000/categories`);
  }
}