import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {PostService} from '../../articles/post.service';
import {Post} from '../../../@core/data/post';
import {PhotosService} from '../../photos/photos.service';


@Component({
  selector: 'ngx-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss'],
})
export class WebComponent implements OnInit {
  @Output("loadPosts") loadPosts: EventEmitter<any> = new EventEmitter();

  subject = 'WEB';
  allPosts: [Post];

  constructor(
    private postService: PostService,
    private photosService: PhotosService,
  ) {
  }


  ngOnInit() {
    this.loadArticles();
  }

  loadArticles() {
    this.postService.loadArticles(this.subject).subscribe(data => {
      if (data) {
        this.allPosts = data.post;
        console.log(this.allPosts)
      }
    });
  }

}
