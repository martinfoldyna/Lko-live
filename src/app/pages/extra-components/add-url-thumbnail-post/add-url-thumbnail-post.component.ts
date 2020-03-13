import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {PostService} from "../../articles/post.service";
import {Post} from "../../../@core/data/post";
import {environment} from "../../../../environments/environment";
import {NbToastrService} from "@nebular/theme"
import {PhotosService} from "../../photos/photos.service";
import {CompressedPhoto} from "../../../@core/data/photo";

@Component({
  selector: 'ngx-add-url-thumbnail-post',
  templateUrl: './add-url-thumbnail-post.component.html',
  styleUrls: ['./add-url-thumbnail-post.component.scss']
})
export class AddUrlThumbnailPostComponent implements OnInit {
  @Output("loadVideos") loadVideos: EventEmitter<any> = new EventEmitter();

  @Input() web: boolean;
  @Input() video: boolean;
  @Input() subject: string;
  classYear;

  post: Post = {};
  localUrl: any;
  fetchingData: boolean = false;
  compressingImages: boolean = false;
  thumbnail;

  constructor(
    private postService: PostService,
    private toastr: NbToastrService,
    private photosService: PhotosService
  ) { }

  ngOnInit() {
  }

  fileSelected(event) {
    this.thumbnail = event.target.files[0];
    console.log(this.thumbnail);
    this.compressingImages = true;

    this.setupFileReader(this.thumbnail);
  }

  setupFileReader(file) {
    if(file) {
      let fileName = file.name;
      let reader = new FileReader();
      reader.onload = (event: any) => {
        this.localUrl = event.target.result;
        this.photosService.getOrientation(file).then((orientation) => {
          console.log(orientation);
          // compressing the big image
          this.photosService.compressFile(this.localUrl, fileName, orientation, 35).then(compressedFile => {
            console.log(compressedFile)
            if(compressedFile) {
              this.post.thumbnail = compressedFile;
              this.compressingImages = false;
            }
          }).catch(err => {
            console.log(err);
            this.toastr.danger(err.message, err.status);
          })
        })
      }
      reader.readAsDataURL(file);
    }
  }


  upload() {
    let formData: FormData = new FormData();
    let headers = new Headers();
    headers.append('enctype', 'multipart/form-data');

    let keys = Object.keys(this.post);
    formData.append('classYear', this.classYear);
    keys.forEach(key => {
      console.log(`${key}: ${JSON.stringify(this.post[key])}`)
      if(key === "thumbnail") {
        formData.append(key, this.post[key].blob, this.post[key].fileName)
      } else {
        formData.append(key, this.post[key]);
      }
    })

    this.postService.addArticle(formData, headers, this.subject).subscribe(data => {
      if(data) {
        this.toastr.success('Nový příspěvek byl nahrán do databáze!', 'Úspěch');
        this.loadVideos.emit();
      }
    })
  }

  disabledSubmit() {
    return !this.classYear || !this.thumbnail
  }

}
