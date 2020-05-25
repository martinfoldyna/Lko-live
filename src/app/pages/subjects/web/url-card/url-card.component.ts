import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Post} from "../../../../@core/data/post";
import {PhotosService} from "../../../photos/photos.service";
import {PostService} from "../../../articles/post.service";
import {NbToastrService, NbDialogService} from "@nebular/theme";
import {WindowEditComponent} from "../../../articles/window-edit/window-edit.component";
import {GeneralService} from "../../../../@core/utils/general.service";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'ngx-url-card',
  templateUrl: './url-card.component.html',
  styleUrls: ['./url-card.component.scss']
})
export class UrlCardComponent implements OnInit {
  @Output("loadVideos") loadVideos: EventEmitter<any> = new EventEmitter();

  @Input() subject: string;
  @Input() post: Post;
  icon: string;
  showOverlay: boolean = false;

  constructor(
    private photosService: PhotosService,
    private postService: PostService,
    private toastr: NbToastrService,
    private dialogService: NbDialogService,
    private generalService: GeneralService

  ) {
    this.icon = this.subject === "MME" ? 'play-circle-outline' : 'external-link-outline';
  }

  ngOnInit() {
  }

  deleteArticle(id) {
    this.generalService.delete(environment.models.article, id).subscribe(result => {
      if (result) {
        this.loadVideos.emit();
        this.toastr.success('Příspěvek byl úspěšně smazán!', 'Smazáno');
      }
    })
  }

  editArticle(article) {
    this.dialogService.open(WindowEditComponent, {context: {article: article}}).onClose.subscribe(() => {

      this.loadVideos.emit()
    });
  }

}
