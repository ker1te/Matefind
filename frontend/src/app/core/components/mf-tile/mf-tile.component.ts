import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';

interface IMFTileData {
  image: string;
  title: string;
  subTitle: string;
  onTileClick: Function;
}

@Component({
  selector: 'app-mf-tile',
  templateUrl: './mf-tile.component.html',
  styleUrls: ['./mf-tile.component.scss']
})
export class MfTileComponent implements OnInit {
  @HostListener('click', ['$event'])
  private onClick(){
    this.onTileClick();
  }

  @Input('data') data: IMFTileData = {
    image: '',
    title: '',
    subTitle: '',
    onTileClick: () => {}
  } as IMFTileData ;

  constructor(
      @Inject('rootServerUrl') public rootServerUrl: string
  ) { }

  ngOnInit(): void {  }

  private onTileClick(): void {
    this.data.onTileClick();
  }

}
