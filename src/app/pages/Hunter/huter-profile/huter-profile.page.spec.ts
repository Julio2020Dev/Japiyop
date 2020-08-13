import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HuterProfilePage } from './huter-profile.page';

describe('HuterProfilePage', () => {
  let component: HuterProfilePage;
  let fixture: ComponentFixture<HuterProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuterProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HuterProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
