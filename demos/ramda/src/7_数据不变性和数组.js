import * as R from 'ramda'

{
  const numbers = [10, 20, 30, 40, 50, 60]

  R.nth(3, numbers) // => 40  (0-based indexing)

  R.nth(-2, numbers) // => 50 (negative numbers start from the right)

  R.slice(2, 5, numbers) // => [30, 40, 50] (see below)

  R.includes(20, numbers) // => true

  R.head(numbers) // => 10
  R.tail(numbers) // => [20, 30, 40, 50, 60]

  R.last(numbers) // => 60
  R.init(numbers) // => [10, 20, 30, 40, 50]

  R.take(3, numbers) // => [10, 20, 30]
  R.takeLast(3, numbers) // => [40, 50, 60]
}

// 增、删、改数组元素

{
  // 对于对象，我们已经学了对其属性进行增、删、改的函数：assoc、dissoc、evolve 等。
  const numbers = [10, 20, 30, 40, 50, 60]

  R.insert(3, 35, numbers) // => [10, 20, 30, 35, 40, 50, 60]

  R.append(70, numbers) // => [10, 20, 30, 40, 50, 60, 70]

  R.prepend(0, numbers) // => [0, 10, 20, 30, 40, 50, 60]

  R.update(1, 15, numbers) // => [10, 15, 30, 40, 50, 60]

  R.concat(numbers, [70, 80, 90]) // => [10, 20, 30, 40, 50, 60, 70, 80, 90]
}

// Ramda 还提供了几个删除元素的函数。remove 删除指定索引处的元素，without 通过值删除元素。还有常用到的删除前 N 或 后 N 个元素的函数：drop 和 dropLast。

{
  const numbers = [10, 20, 30, 40, 50, 60]

  R.remove(2, 3, numbers) // => [10, 20, 60]

  R.without([30, 40, 50], numbers) // => [10, 20, 60]

  R.drop(3, numbers) // => [40, 50, 60]

  R.dropLast(3, numbers) // => [10, 20, 30]
}

// 变换元素

{
  const numbers = [10, 20, 30, 40, 50, 60]

  const a = R.update(2, R.multiply(10, R.nth(2, numbers)), numbers) // => [10, 20, 300, 40, 50, 60]

  const b = R.adjust(2, R.multiply(10), numbers)
  console.log(a, b)
}
