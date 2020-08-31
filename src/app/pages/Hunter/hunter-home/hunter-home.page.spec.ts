import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HunterHomePage } from './hunter-home.page';

describe('HunterHomePage', () => {
  let component: HunterHomePage;
  let fixture: ComponentFixture<HunterHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HunterHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HunterHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
