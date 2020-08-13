import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HuterTabsPage } from './huter-tabs.page';

describe('HuterTabsPage', () => {
  let component: HuterTabsPage;
  let fixture: ComponentFixture<HuterTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuterTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HuterTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
