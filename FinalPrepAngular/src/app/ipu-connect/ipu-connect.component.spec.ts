import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpuConnectComponent } from './ipu-connect.component';

describe('IpuConnectComponent', () => {
  let component: IpuConnectComponent;
  let fixture: ComponentFixture<IpuConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpuConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpuConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
