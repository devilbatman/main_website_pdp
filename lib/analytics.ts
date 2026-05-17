type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: 'event', eventName: string, params?: EventParams) => void;
  }
}

export function trackEvent(eventName: string, params: EventParams = {}) {
  if (typeof window === 'undefined') {
    return;
  }

  if (localStorage.getItem('cookie-consent') !== 'accepted') {
    return;
  }

  window.gtag?.('event', eventName, params);
}
