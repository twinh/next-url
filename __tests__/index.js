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

  it('should return fallback when no query params', function () {
    expect(nextUrl('index')).toBe('index');
  });

  it('should return URL in query params', function () {
    window.location = {
      search: '?next=/admin'
    };

    expect(nextUrl('index')).toBe('admin');
  });
});