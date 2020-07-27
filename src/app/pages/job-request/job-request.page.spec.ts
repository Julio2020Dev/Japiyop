import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JobRequestPage } from './job-request.page';

describe('JobRequestPage', () => {
  let component: JobRequestPage;
  let fixture: ComponentFixture<JobRequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobRequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JobRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
