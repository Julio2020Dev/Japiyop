import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BlockPage } from './block.page';

describe('BlockPage', () => {
  let component: BlockPage;
  let fixture: ComponentFixture<BlockPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BlockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
