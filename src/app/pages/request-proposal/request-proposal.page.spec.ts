import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestProposalPage } from './request-proposal.page';

describe('RequestProposalPage', () => {
  let component: RequestProposalPage;
  let fixture: ComponentFixture<RequestProposalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestProposalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestProposalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
