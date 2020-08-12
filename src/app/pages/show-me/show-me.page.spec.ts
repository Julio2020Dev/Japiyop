import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowMEPage } from './show-me.page';

describe('ShowMEPage', () => {
  let component: ShowMEPage;
  let fixture: ComponentFixture<ShowMEPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMEPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowMEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
