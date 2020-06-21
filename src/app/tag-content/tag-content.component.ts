import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tag-content',
  templateUrl: './tag-content.component.html',
  styleUrls: ['./tag-content.component.css']
})
export class TagContentComponent implements OnInit {

  public currentWindowWidth: number;

  constructor(private activeRoute : ActivatedRoute) { }

  @HostListener('window:resize')
  onResize() {
    this.currentWindowWidth = window.innerWidth
  }

  ngOnInit(): void {
    this.parseParams();
    this.currentWindowWidth = window.innerWidth;
  }

  get isMobile() : boolean {
    return this.currentWindowWidth < 800;
  }

  parseParams() { this.activeRoute.paramMap.subscribe((params:any) => { this.sharedData = { categoryName : params.params.tag, sortName : params.params.sort, parentPage : "categoryPage" }   /* this.route = params.params.tag; this.sort = params.params.sort; */});}

  sharedData : any;
  
  route : string;
  sort : string;
  parent : string = "tag";

 

}
