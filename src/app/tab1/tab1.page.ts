import { Component } from '@angular/core';
import { NewsDetailsService } from '../news-details.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  articles: any[] = []; 

  constructor(private newsService: NewsDetailsService, private router: Router) {
    this.loadData();
  }

  loadData() {
    this.newsService.getNews().subscribe((news: any) => {
      this.articles = news; 
      console.log(this.articles);
    });
  }

  openNewsDetails(article: any) {
    this.router.navigate(['tabs/tab1/news-details'], { state: { article } });
  }
  
  
}





   //constructor(public httpClient: HttpClient) {
    // this.loadData();
  /* loadData() {
    this.httpClient.get(`${API_URL}/top-headlines?sources=techcrunch&apiKey=${API_KEY}`).subscribe(results =>{
      console.log(results);
    });
  }*/

