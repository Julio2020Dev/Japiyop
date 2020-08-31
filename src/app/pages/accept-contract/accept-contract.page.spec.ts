import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcceptContractPage } from './accept-contract.page';

describe('AcceptContractPage', () => {
  let component: AcceptContractPage;
  let fixture: ComponentFixture<AcceptContractPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptContractPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcceptContractPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
