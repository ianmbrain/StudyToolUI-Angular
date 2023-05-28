import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Category } from 'src/app/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseApiUrl + '/api/category');
  }

  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(this.baseApiUrl + '/api/category/' + id);
  }

  addCategory(addCategoryRequest: Category) {
    return this.http.post(this.baseApiUrl + '/api/category', addCategoryRequest);
  }

  updateCategory(id: number | undefined, updateCategoryRequest: Category) {
    return this.http.put(this.baseApiUrl + '/api/category/' + id, updateCategoryRequest);
  }
}
