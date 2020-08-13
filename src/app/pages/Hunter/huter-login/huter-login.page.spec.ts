import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HuterLoginPage } from './huter-login.page';

describe('HuterLoginPage', () => {
  let component: HuterLoginPage;
  let fixture: ComponentFixture<HuterLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuterLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HuterLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
