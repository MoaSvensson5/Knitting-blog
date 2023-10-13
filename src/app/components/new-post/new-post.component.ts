import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent {
  postData: any = {
    title: '',
    thumbnailUrl: '',
    body: '',
  };
  nextId: number = 0;

  constructor(private storageService: StorageService) {}

  addNewPost(): void {
    const newPost = {
      id: this.nextId++,
      title: this.postData.title,
      thumbnailUrl: this.postData.thumbnailUrl,
      body: this.postData.body,
      creationDate: new Date(),
      likes: 0,
      dislikes: 0,
      comments: [],
    };
    this.storageService.addPost(newPost);

    this.postData = { title: '', thumbnailUrl: '', body: '' };
  }
}
