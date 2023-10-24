import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, Renderer2 } from '@angular/core';
import { Post } from 'src/app/models/post';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  @Input() posts: Post[] = [];

  constructor(
    private storageService: StorageService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.posts = this.storageService.getAllPosts();
  }

  scrollToTop() {
    this.renderer.setProperty(this.document.documentElement, 'scrollTop', 0);
  }
}
