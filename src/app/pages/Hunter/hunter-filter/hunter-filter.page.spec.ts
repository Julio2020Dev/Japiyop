import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HunterFilterPage } from './hunter-filter.page';

describe('HunterFilterPage', () => {
  let component: HunterFilterPage;
  let fixture: ComponentFixture<HunterFilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HunterFilterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HunterFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
