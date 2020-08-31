import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HunterChatPage } from './hunter-chat.page';

describe('HunterChatPage', () => {
  let component: HunterChatPage;
  let fixture: ComponentFixture<HunterChatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HunterChatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HunterChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
