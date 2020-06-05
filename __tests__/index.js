import nextUrl from '..';

describe('next url', () => {
  const originalLocation = window.location;

  beforeEach(() => {
    delete window.location;
    window.location = {
      search: '',
    };
  });

  afterEach(() => {
    window.location = originalLocation;
  });

  it('should return fallback URL when no query params', function () {
    window.location = {
      hostname: 'example.com',
      search: ''
    };

    expect(nextUrl()).toBe('/');
  });

  it('should return URL in query params', function () {
    window.location = {
      hostname: 'example.com',
      search: '?next=/admin'
    };

    expect(nextUrl('index')).toBe('/admin');
  });

  it('should ignore invalid outer link', function () {
    window.location = {
      hostname: 'example.com',
      search: '?next=http://test.com'
    };

    expect(nextUrl('index')).toBe('index');
  });

  it('should allow valid outer link', function () {
    window.location = {
      hostname: 'example.com',
      search: '?next=http://test.com'
    };

    expect(nextUrl('/', ['test.com'])).toBe('http://test.com');
  });
});