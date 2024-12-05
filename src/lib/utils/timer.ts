export function createSafeTimeout(callback: () => void, delay: number): () => void {
  if (typeof window === 'undefined') return () => {};
  
  const timeoutId = window.setTimeout(callback, delay);
  return () => window.clearTimeout(timeoutId);
}

export function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), wait);
  };
}