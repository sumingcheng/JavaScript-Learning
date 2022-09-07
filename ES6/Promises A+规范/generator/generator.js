function generator(arr) {
  let nextIdx = 0;
  return {
    next: function () {
      return nextIdx < arr.length - 1
          ? { value: arr[nextIdx ++], done: false }
          : { value: arr[nextIdx ++] || undefined, done: true }
    }
  }
}
