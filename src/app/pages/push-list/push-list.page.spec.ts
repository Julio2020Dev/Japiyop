import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PushListPage } from './push-list.page';

describe('PushListPage', () => {
  let component: PushListPage;
  let fixture: ComponentFixture<PushListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PushListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
