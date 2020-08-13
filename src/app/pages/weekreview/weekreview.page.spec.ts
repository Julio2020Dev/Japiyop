import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeekreviewPage } from './weekreview.page';

describe('WeekreviewPage', () => {
  let component: WeekreviewPage;
  let fixture: ComponentFixture<WeekreviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekreviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeekreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
