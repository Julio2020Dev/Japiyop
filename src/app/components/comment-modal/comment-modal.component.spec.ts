import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommentModalComponent } from './comment-modal.component';

describe('CommentModalComponent', () => {
  let component: CommentModalComponent;
  let fixture: ComponentFixture<CommentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
