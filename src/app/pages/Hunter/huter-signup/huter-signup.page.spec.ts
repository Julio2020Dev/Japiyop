import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HuterSignupPage } from './huter-signup.page';

describe('HuterSignupPage', () => {
  let component: HuterSignupPage;
  let fixture: ComponentFixture<HuterSignupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuterSignupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HuterSignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
