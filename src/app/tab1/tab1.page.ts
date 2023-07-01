import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(public httpClient: HttpClient) {
    this.loadData();
  }

  loadData() {
    this.httpClient.get(`${API_URL}/top-headlines?sources=techcrunch&apiKey=${API_KEY}`).subscribe(results =>{
      console.log(results);
    });
  }
}
