import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HunterDetailsPage } from './hunter-details.page';

describe('HunterDetailsPage', () => {
  let component: HunterDetailsPage;
  let fixture: ComponentFixture<HunterDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HunterDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HunterDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
