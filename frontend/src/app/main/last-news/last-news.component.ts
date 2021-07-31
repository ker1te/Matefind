import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/app/shared/types';

@Component({
  selector: 'app-last-news',
  templateUrl: './last-news.component.html',
  styleUrls: ['./last-news.component.scss']
})
export class LastNewsComponent implements OnInit {

  newsList: News[];

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.newsList = this.newsService.getLastNews();
  }

}
