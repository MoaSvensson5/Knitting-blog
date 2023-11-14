import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';
import { StorageService } from 'src/app/services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent {
  constructor(private storageService: StorageService) {}

  postFields = [
    { name: 'title', type: 'text', placeholder: 'Title..' },
    { name: 'ThumbnailUrl', type: 'text', placeholder: 'ThumbnailUrl..' },
  ];
  textarea = { name: 'body', placeholder: 'Post..' };

  onSubmitForm(inputData: { [key: string]: string }) {
    const newPost = new Post(
      inputData['title'],
      inputData['thumbnail_url'],
      inputData['body']
    );
    newPost.id = this.storageService.getNextPostId();
    this.storageService.addPost(newPost);
  }
}
 