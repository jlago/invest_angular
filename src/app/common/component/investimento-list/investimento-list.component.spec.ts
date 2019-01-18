import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestimentoListComponent } from './investimento-list.component';

describe('InvestimentoListComponent', () => {
  let component: InvestimentoListComponent;
  let fixture: ComponentFixture<InvestimentoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestimentoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestimentoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
