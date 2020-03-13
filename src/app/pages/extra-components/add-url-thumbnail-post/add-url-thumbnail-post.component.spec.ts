import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUrlThumbnailPostComponent } from './add-url-thumbnail-post.component';

describe('AddUrlThumbnailPostComponent', () => {
  let component: AddUrlThumbnailPostComponent;
  let fixture: ComponentFixture<AddUrlThumbnailPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUrlThumbnailPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUrlThumbnailPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
