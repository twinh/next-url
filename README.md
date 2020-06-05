# next-url

Get next redirect URL from query string

## Install

`yarn add next-url`


## Usage

`nextUrl(fallback = '/', allowHostnames = []);`

```js
import nextUrl from 'next-url';

// widnow.location.search = '?next=/user'
let url = nextUrl(); // Returns "/user"

// widnow.location.search = ''
let url = nextUrl(); // Fallback to index "/"

// window.location.href = "https://example.com?next=https://test.com"
let url = nextUrl(); // Fallback to index "/"

// window.location.href = "https://example.com?next=https://test.com"
let url = nextUrl('/', ['test.com']); // Returns https://test.com
```
