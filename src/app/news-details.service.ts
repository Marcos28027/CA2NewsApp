
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class NewsDetailsService {
  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get<any>(`${API_URL}/top-headlines?sources=techcrunch&apiKey=${API_KEY}`)
      .pipe(
        map(response => response.articles) // Extract the articles array from the API response
      );
  }
}
