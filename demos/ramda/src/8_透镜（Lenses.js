import * as R from 'ramda'
/**
 * 我们学习了如何以声明式和不变式来读取、更新和转换对象的属性和数组的元素。
   Ramda 提供了一个更通用的工具：透镜（lens），来进行这些操作。
 * 透镜将 "getter" 和 "setter" 函数组合为一个单一模块。Ramda 提供了一系列配合透镜一起工作的函数。
 */

const person = {
  name: 'Randy',
  socialMedia: {
    github: 'randycoulman',
    twitter: '@randycoulman'
  }
}

// ----
{
  const nameLens = R.lens(R.prop('name'), R.assoc('name'))
  const twitterLens = R.lens(
    R.path(['socialMedia', 'twitter']),
    R.assocPath(['socialMedia', 'twitter'])
  )
}

// --
{
  const nameLens = R.lensProp('name')
  const twitterLens = R.lensPath(['socialMedia', 'twitter'])
  // Ramda 提供了三个配合透镜一起使用的的函数：

  // view：读取透镜的值。
  // set：更新透镜的值。
  // over：将变换函数作用于透镜。

  R.view(nameLens, person) // => 'Randy'

  R.set(twitterLens, '@randy', person)
  // => {
  //   name: 'Randy',
  //   socialMedia: {
  //     github: 'randycoulman',
  //     twitter: '@randy'
  //   }
  // }

  R.over(nameLens, R.toUpper, person)
  // => {
  //   name: 'RANDY',
  //   socialMedia: {
  //     github: 'randycoulman',
  //     twitter: '@randycoulman'
  //   }
  // }
}

