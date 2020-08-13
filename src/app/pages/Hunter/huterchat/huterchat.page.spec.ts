import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HuterchatPage } from './huterchat.page';

describe('HuterchatPage', () => {
  let component: HuterchatPage;
  let fixture: ComponentFixture<HuterchatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuterchatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HuterchatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
