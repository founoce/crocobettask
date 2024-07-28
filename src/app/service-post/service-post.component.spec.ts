import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostService } from './service-post.component';

describe('ServicePostComponent', () => {
  let component: PostService;
  let fixture: ComponentFixture<PostService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
