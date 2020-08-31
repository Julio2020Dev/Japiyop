import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HunterProfilePage } from './hunter-profile.page';

describe('HunterProfilePage', () => {
  let component: HunterProfilePage;
  let fixture: ComponentFixture<HunterProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HunterProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HunterProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
