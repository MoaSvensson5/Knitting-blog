import { Injectable } from '@angular/core';
import { Post } from '../models/post';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public posts: Post[] = [];

  constructor() { 
    this.posts = this.loadPost();
  }

  public savePost(post:Post): void {
    const savedPosts = this.loadPost();
    savedPosts.push(post);
    localStorage.setItem('posts', JSON.stringify(savedPosts));
    this.posts = savedPosts;
  }

  public loadPost(): Post[] {
    const postJson = localStorage.getItem('posts');
    return postJson ? JSON.parse(postJson) : [];
  }

  public getAllPosts(): Post[] {
    return this.posts;
  }

  public addPost(newPost: Post): void {
    this.savePost(newPost);
  }

  public updatePost(post: Post): void {
    const savedPosts = this.loadPost();
    const existingPostIndex = savedPosts.findIndex((p) => p.id === post.id);
    if (existingPostIndex !== -1) {
      savedPosts[existingPostIndex] = post;
      localStorage.setItem('posts', JSON.stringify(savedPosts));
      this.posts = savedPosts;
    }
  }
}