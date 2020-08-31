import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HunterequestPage } from './hunterequest.page';

describe('HunterequestPage', () => {
  let component: HunterequestPage;
  let fixture: ComponentFixture<HunterequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HunterequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HunterequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
