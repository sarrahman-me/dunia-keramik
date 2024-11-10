import { setCookie, getCookie } from "cookies-next";

interface TrackedProduct {
  sku: string;
  timestamp: number;
}

export function trackProduct(sku: string) {
  let productsTracker: TrackedProduct[] = [];
  const currentData = getCookie("X-Preferred-SKUs");

  if (currentData) {
    productsTracker = JSON.parse(currentData);
  }

  const threeDaysInMillisecond = 7 * 24 * 60 * 60 * 1000;

  productsTracker = productsTracker.filter(
    (product) => Date.now() - product.timestamp <= threeDaysInMillisecond
  );

  const isAlreadyTracked = productsTracker.some(
    (product) => product.sku === sku
  );

  if (!isAlreadyTracked) {
    productsTracker.push({ sku, timestamp: Date.now() });
  }

  setCookie("X-Preferred-SKUs", JSON.stringify(productsTracker), { maxAge: 60 * 60 * 24 * 365 });
}

export function getTrackerProducts(): string[] {
  const currentData = getCookie("X-Preferred-SKUs");

  if (currentData) {
    const productsTracker: TrackedProduct[] = JSON.parse(currentData);

    return productsTracker
      .map((product) => product.sku)
      .reverse();
  } else {
    return [];
  }
}
