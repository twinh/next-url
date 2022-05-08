import nextUrl from '..';

describe('next url', () => {
  const originalLocation = window.location;

  beforeEach(() => {
    delete window.location;
    window.location = {
      search: '',
      hash: '',
    };
  });

  afterEach(() => {
    window.location = originalLocation;
  });

  it('should return fallback URL when no query params', function () {
    window.location = {
      hostname: 'example.com',
      search: '',
      hash: ''
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
  
  it('should support URL hash', function () {
    window.location = {
      hostname: 'example.com',
      hash: '#/admin.html?next=%2Fproducts'
    };

    expect(nextUrl('index')).toBe('/products');
  });

  it('should ignore URL hash without params', function () {
    window.location = {
      hostname: 'example.com',
      hash: '#/admin.html'
    };

    expect(nextUrl('index')).toBe('index');
  });
});