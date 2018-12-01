import { TestBed } from '@angular/core/testing';

import { Order.ServiceService } from './order.service.service';

describe('Order.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Order.ServiceService = TestBed.get(Order.ServiceService);
    expect(service).toBeTruthy();
  });
});
