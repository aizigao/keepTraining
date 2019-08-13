class Queue {
  constructor() {
    this._items = [];
  }

  //入队
  enqueue(...items) {
    this._items.push(...items);
    return this._items;
  }

  // 出队
  dequeue(count = 1) {
    //pull out the first item from the queue
    this._items.splice(0, count);
    return this._items;
  }

  peek() {
    //peek at the first item from the queue
    return this._items[0];
  }

  size() {
    //get the length of queue
    return this._items.length;
  }

  isEmpty() {
    //find whether the queue is empty or no
    return this._items.length === 0;
  }
}

// ------- 实例 -----
// 基数排序
// TODO: https://juejin.im/entry/59c9c3c86fb9a00a4f1b3e51
