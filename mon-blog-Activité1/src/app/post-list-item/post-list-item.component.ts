import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post;

  constructor() { }

  ngOnInit() {
  }

  onLoveIts(value : string){
  	if (value === "add") {
  		this.post.loveIts++;
  		alert("Love It");
  	} else {
  		this.post.loveIts--;
  		alert("Don't love it");
  	}
  }
}
