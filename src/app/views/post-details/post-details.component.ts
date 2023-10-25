import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { StorageService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent {
  title: string = '';
  newComment: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private storageService: StorageService
  ) {
    activatedRoute.params.subscribe((params) => (this.title = params['title']));
  }

  get post(): Post | undefined {
    return this.storageService.posts.find((post) => post.title === this.title);
  }

  increaseLikes(post: Post): void {
    post.likes++;
    this.storageService.updatePost(post);
  }

  increaseDislikes(post: Post): void {
    post.dislikes++;
    this.storageService.updatePost(post);
  }

  addComment(post: Post): void {
    if (this.newComment) {
      this.storageService.addComment(post, this.newComment);
      this.newComment = '';
    }
  }
}
