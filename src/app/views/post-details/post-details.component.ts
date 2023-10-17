import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
  id: number = -1;
  newComment:string='';

  constructor(
    private activatedRoute: ActivatedRoute,
    private storageService: StorageService,
  ) {
    activatedRoute.params.subscribe(
      (params) => (this.id = parseInt(params['id'])),
    );
  }

  get post(): Post | undefined {
    return this.storageService.posts.find((all) => all.id === this.id);
  }

  increaseLikes(post: Post): void {
    post.likes++;
    this.storageService.updatePost(post);
  }

  increaseDislikes(post: Post): void {
    post.dislikes++;
    this.storageService.updatePost(post);
  }

  addComment(post: Post ): void {
    if (this.newComment) {
      this.storageService.addComment(post, this.newComment); // Anropa lagringstjänsten för att lägga till kommentaren
      this.newComment = ''; // Nollställ den aktuella kommentaren efter att ha lagt till den
    }
  }
}
