// delay
export const delay = (ms: number): Promise<void> =>
  new Promise<void>((resolve, reject) =>
    setTimeout(() => {
      return resolve();
    }, ms)
  );