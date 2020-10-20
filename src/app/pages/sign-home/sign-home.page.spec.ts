import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignHomePage } from './sign-home.page';

describe('SignHomePage', () => {
  let component: SignHomePage;
  let fixture: ComponentFixture<SignHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
