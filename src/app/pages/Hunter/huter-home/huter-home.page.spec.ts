import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HuterHomePage } from './huter-home.page';

describe('HuterHomePage', () => {
  let component: HuterHomePage;
  let fixture: ComponentFixture<HuterHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuterHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HuterHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
