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

  
}
