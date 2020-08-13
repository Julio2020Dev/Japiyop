import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HuterPage } from './huter.page';

describe('HuterPage', () => {
  let component: HuterPage;
  let fixture: ComponentFixture<HuterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HuterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
