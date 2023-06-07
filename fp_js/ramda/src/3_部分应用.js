// https://zhuanlan.zhihu.com/p/27520457
import * as R from 'ramda'

{
  // 例如，假设有一个书籍对象的集合，我们想要找到
  // '特定年份出版'的所有 '图书的标题'。可以使用 Ramda 的集合迭代函数完成该需求：

  const publishedInYear = (book, year) => book.year === year

  const titlesForYear = (books, year) => {
    const selected = R.filter(book => publishedInYear(book, year), books)

    return R.map(book => book.title, selected)
  }
  // 如果能将 filter 和 map 组合成 "pipeline" 就好了，但我们并不知道该如何处理，因为 filter 和 map 都是二元函数。

  /**
   * 高阶函数
   */

  function publishedInYear2 (year) {
    return function (book) {
      return book.year === year
    }
  }
  const publishedInYear3 = (year) => book => book.year === year

  // 利用新实现的 publishedInYear，可以重写 filter 调用，从而消除箭头函数：

  const titlesForYear2 = (books, year) => {
    const selected = R.filter(publishedInYear3(year), books)
    return R.map(book => book.title, selected)
  }

  // 部分应用函数
  // 幸运的是，Ramda 提供了两个函数：partial 和 partialRight，来帮我们解决这个问题。

  const titlesForYear3 = (books, year) => {
    const selected = R.filter(R.partialRight(publishedInYear, [year]), books)

    return R.map(book => book.title, selected)
  }

  /**
   * 柯里化(Curry)
   */
  // Currying（柯里化） 是函数式编程的另一个核心概念。从技术角度讲，一个柯里化了的函数是一系列高阶一元函数，这也是我刚刚抱怨过的。在纯函数式语言中，柯里化函数在调用时，语法上看起来和调用多个参数没有什么区别。

  const publishedInYear4 = R.curry((year, book) => book.year === year)

  const titlesForYear4 = (year, book) => {
    const selected = R.filter(publishedInYear4(year), books)

    return R.map(book => book.title, selected)
  }

  // 顺序错误的参数
  // 第一个选择是 flip。flip 接受一个多元函数（元数 >= 2），返回一个元数相同的新函数，但前 2 个参数的顺序调换了。它主要用于二元函数，但也可以用于一般函数。

  // 使用 flip，我们可以恢复 publishedInYear 参数的初始的顺序：
  const publishedInYear5 = R.curry((book, year) => book.year === year)

  const titlesForYear5 = (books, year) => {
    const selected = R.filter(R.flip(publishedInYear)(year), books)

    return R.map(book => book.title, selected)
  }

  // 更通用的选择是使用 "placeholder" 参数（__）
  // 假设有一个三元柯里化的函数，并且我们想传入第一个和最后一个参数，中间参数后续再传，应该怎么办呢？我们可以使用 "占位符" 作为中间参数：

  const threeArgs = R.curry((a, b, c) => { /* ... */ })
  const middleArgumentLater = threeArgs('value for a', R.__, 'value for c')
}

// pipe it
{
  const publishedInYear = R.curry((year, book) => book.year === year)
  const titleForYear = R.curry((year, books) =>
    R.pipe(
      R.filter(publishedInYear(year), books),
      R.map(book => book.title)
    )(books))
}
