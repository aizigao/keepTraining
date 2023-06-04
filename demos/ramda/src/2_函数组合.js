import { rDebug } from './util'
import * as R from 'ramda'

// --------
{
  // https://zhuanlan.zhihu.com/p/27473549
  // Thinking in Ramda: 函数组合
  // Complement

  const isEven = x => x % 2 === 0
  console.log(
    R.find(isEven, [1, 2, 3, 4]) //= > 2
  )

  // complement，给它传入一个函数，返回一个新的函数：当原函数返回 "假值" 时，新函数返回 true；原函数返回 "真值" 时，新函数返回 false，即新函数是原函数的补函数。

  console.log(
    R.find(
      R.complement(isEven), [1, 2, 3, 4]
    )
  ) // -- 1

  const isOdd = R.complement(isEven)
  console.log(
    R.find(isOdd, [1, 2, 3, 4])
  )
}

{
  // Both/Either
  // 假设我们正在开发一个投票系统，给定一个人，我们希望能够确定其是否有资格投票。根据现有知识，
  // 一个人必须年满 18 岁并且是本国公民，才有资格投票。
  // 成为公民的条件：在本国出生，或者后来加入该国国籍。

  const wasBornInCountry = person => person.birthCountry === OUR_COUNTRY
  const wasNaturalized = person => Boolean(person.naturalizationDate)
  const isOver18 = person => person.age >= 18

  const isCitizen = person => wasBornInCountry(person) || wasNaturalized(person)

  const isEligibleToVote = person => isOver18(person) && isCitizen(person)

  const isCitizen2 = R.either(wasBornInCountry, wasNaturalized)
  const isEligibleToVote2 = R.both(isOver18, isCitizen)
}

{
  // Pipelines(管道)
  // 有时我们需要以 pipeline 的方式将多个函数依次作用于某些数据。例如，接受两个数字，将它们相乘，加 1 ，然后平方。我们可以这样写：
  const multiply = (a, b) => a * b
  const addOne = x => x + 1
  const square = x => x * x

  const operate = (x, y) => {
    const product = multiply(x, y)
    const incremented = addOne(product)
    const squared = square(incremented)

    return squared
  }

  console.log(operate(3, 4)) // => ((3 * 4) + 1)^2 => (12 + 1)^2 => 13^2 => 169

  const operate2 = R.pipe(
    multiply,
    addOne,
    square,
    rDebug('pipe')
  )

  operate2(3, 4)

  // compose
  const operate3 = R.compose(
    rDebug('compose'),
    square,
    addOne,
    multiply
  )
  operate3(3, 4)
}
