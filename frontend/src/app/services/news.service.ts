import { Injectable } from '@angular/core';
import { NewsList } from '../shared/newsList';
import { News } from '../shared/types';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  getNews(): News[] {
    return NewsList;
  }

  getNewsById(newsId: number): News {
    return NewsList.filter(n => n.id == newsId)[0];
  }

  getLastNews(): News[] {
    return NewsList; // todo: Return last news
  }
}
