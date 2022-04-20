import { TestBed } from '@angular/core/testing';

import { messagesService } from './messages.service';

describe('messagesService', () => {
  let service: messagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(messagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
