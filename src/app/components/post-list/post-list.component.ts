import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, Renderer2 } from '@angular/core';
import { Post } from 'src/app/models/post';
import { AdminViewService } from 'src/app/services/admin-view.service';
import { StorageService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  public posts: Post[] = [];
  isAdminView: boolean = true;
  
  constructor(
    private storageService: StorageService,
    private adminViewService: AdminViewService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.posts = this.storageService.getAllPosts();
  }

  ngOnInit() {
    this.adminViewService.isAdminView$.subscribe((isAdminView) => {
      this.isAdminView = isAdminView;
    });
  }
  
  scrollToTop() {
    this.renderer.setProperty(this.document.documentElement, 'scrollTop', 0);
  }

  remove(post: Post): void {
    this.storageService.removePost(post);
    this.posts = this.storageService.getAllPosts();
  }
}
