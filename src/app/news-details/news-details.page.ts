import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.page.html',
  styleUrls: ['./news-details.page.scss'],
})
export class NewsDetailsPage implements OnInit {

  article: any;
  isFavorite: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private storage: Storage
  ) {}

  ngOnInit() {
    this.article = history.state.article;
    this.checkFavoriteStatus();
  }

  toggleFavorite() {
    if (this.isFavorite) {
      this.removeFavorite();
    } else {
      this.addFavorite();
    }
  }

  addFavorite() {
    this.storage.create().then(() => {
      this.storage.get('favorites').then((favorites: any[]) => {
        if (!favorites) {
          favorites = [];
        }
        favorites.push(this.article);
        this.storage.set('favorites', favorites);
        this.isFavorite = true;
        console.log('Favorites:', favorites);
      });
    });
  }

  removeFavorite() {
    this.storage.create().then(() => {
      this.storage.get('favorites').then((favorites: any[]) => {
        if (favorites) {
          favorites = favorites.filter((favorite: any) => favorite.url !== this.article.url);
          this.storage.set('favorites', favorites);
          this.isFavorite = false;
          console.log('Favorites:', favorites);
        }
      });
    });
  }

  /*checkFavoriteStatus() {
    this.storage.create().then(() => {
      this.storage.get('favorites').then((favorites: any[]) => {
        if (favorites) {
          this.isFavorite = favorites.some((favorite: any) => favorite.url === this.article.url);
          console.log('Favorites:', favorites);
        }
      });
    });
  }*/

  checkFavoriteStatus() {
    this.storage.create().then(() => {
      this.storage.get('favorites').then((favorites: any[]) => {
        if (favorites && this.article) {
          this.isFavorite = favorites.some(
            (favorite: any) => favorite.url === this.article.url
          );
          console.log('Favorites:', favorites);
        }
      });
    });
  }
  

}
