const forEachKey = <T>(func: (key: keyof T) => any, obj: T): any =>
  (<(keyof T)[]>Object.keys(obj)).reduce(
    (a, b) => ({ ...a, [b]: func(b) }),
    {}
  );

export { forEachKey };
