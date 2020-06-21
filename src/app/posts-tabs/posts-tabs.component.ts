import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts-tabs',
  templateUrl: './posts-tabs.component.html',
  styleUrls: ['./posts-tabs.component.css']
})
export class PostsTabsComponent implements OnInit {

  navLinks: any[];
  activeLinkIndex = -1; 
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Популярные',
            link: './popular',
            index: 0
        }, 
        
        {
            label: 'Новые',
            link: './new',
            index: 1
        } 
    ];
}
ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}

}
