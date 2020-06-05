import qs from 'query-string'
import Url from 'url-parse';

export default (fallback = '/', allowHostnames = []) => {
  const next = qs.parse(window.location.search).next;
  if (next) {
    const {hostname} = new Url(next);
    if (!hostname || hostname === window.location.hostname || allowHostnames.includes(hostname)) {
      return next;
    }
  }
  return fallback;
};