export function debounce<F extends (...args: any[]) => void>(
  eventHandler: F,
  milliseconds = 500
): F {
  let timer: ReturnType<typeof setTimeout> | undefined;
  return function (this: any, ...args: any[]) {
    if (timer !== undefined) {
      clearTimeout(timer);
    }
    timer = setTimeout(eventHandler.bind(this, ...args), milliseconds);
  } as F;
}
