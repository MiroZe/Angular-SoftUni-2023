import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postsList : Post[] | null = []

  constructor(private apiService: ApiService) {}

  
  ngOnInit() : void {
    this.apiService.loadPosts(5).subscribe( {
      next: (value)=> {this.postsList = value
        console.log(this.postsList)}
      ,
      error: (error) => console.log(error)
      
  })
  }

}
