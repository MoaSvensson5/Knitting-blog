import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  @Input () posts: Post[]=[];

  constructor(private storageService: StorageService) {
    this.posts = this.storageService.getAllPosts(); 
  }
}
