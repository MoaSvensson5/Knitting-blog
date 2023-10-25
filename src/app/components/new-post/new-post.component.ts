import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';
import { StorageService } from 'src/app/services/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent {
  postData: {title:string, thumbnailUrl:string, body:string} = {
    title: '',
    thumbnailUrl: '',
    body: '',
  };

  constructor(private storageService: StorageService) {}

  addNewPost(): void {
    const newPost = new Post(
      this.postData.title,
      this.postData.thumbnailUrl,
      this.postData.body
    );
    newPost.id = this.storageService.getNextPostId();
    this.storageService.addPost(newPost);
    this.postData = { title: '', thumbnailUrl: '', body: '' };
  }
}
