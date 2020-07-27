import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JobReviewsPage } from './job-reviews.page';

describe('JobReviewsPage', () => {
  let component: JobReviewsPage;
  let fixture: ComponentFixture<JobReviewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobReviewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JobReviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
