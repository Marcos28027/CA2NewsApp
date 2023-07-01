/*import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

}*/

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  favorites: any[] = [];

  constructor(private storage: Storage, private router: Router) {}

  ngOnInit() {
    this.getFavorites();
  }

  ionViewWillEnter() {
    this.getFavorites();
  }
  getFavorites() {
    this.storage.create().then(() => {
      this.storage.get('favorites').then((favorites: any[]) => {
        if (favorites) {
          this.favorites = favorites;
        }
      });
    });
  }

  openNewsDetails(article: any) {
    this.router.navigate(['tabs/tab2/news-details'], { state: { article } });
  }
}
