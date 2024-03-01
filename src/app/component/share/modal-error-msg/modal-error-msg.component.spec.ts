import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalErrorMsgComponent } from './modal-error-msg.component';

describe('ModalErrorMsgComponent', () => {
  let component: ModalErrorMsgComponent;
  let fixture: ComponentFixture<ModalErrorMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalErrorMsgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalErrorMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
