import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestProfilePage } from './request-profile.page';

describe('RequestProfilePage', () => {
  let component: RequestProfilePage;
  let fixture: ComponentFixture<RequestProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
