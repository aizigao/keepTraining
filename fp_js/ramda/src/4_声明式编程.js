// https://zhuanlan.zhihu.com/p/27520476

import * as R from 'ramda'
/**
 * 当我们开始编写小的函数式构建块并组合它们时，发现必须写好多函数来包裹 JavaScript 操作符，比如算术、比较、逻辑操作符和控制流。这可能比较乏味，但 Ramda 将我们拉了回来，让事情变得有趣起来。
 */

/**
 * 命令式 vs 声明式
 */

/**
 * Logic (逻辑)
 */

{
  const settings = {
    lineWidth: 90
  }
  // -- 默认值
  const lineWidth = settings.lineWidth || 80
  // 这是一个常见的用法，大部分情况下都能正常工作，但依赖于 JavaScript 对 "falsy" 值的定义。假设 0 是一个合法的设置选项呢？由于 0 是 "falsy" 值，所以我们最终会得到的行宽为 80 。
  const lineWidth2 = R.defaultTo(80, settings.lineWidth)

  // -- Conditionals (条件)
  // - fiElse

  const forever21 = age => age >= 21 ? 21 : age + 1
  const forever21_2 = age => R.ifElse(R.gte(R.__, 21), () => 21, R.inc)(age)

  //  - constants (常量)
  // Ramda 还提供了 T 和 F，作为 always(true) 和 always(false) 的缩写。

  const forever21_3 = age => R.ifElse(R.gte(R.__, 21), R.always(21), R.inc)(age)

  // -- identity (恒等)

  // 再来写一个函数：alwaysDrivingAge。该函数接受一个年龄，如果 gte 16，则将该年龄返回；但如果小于 16，则返回 16。这样任何人都可以伪造他们的驾驶年龄了，即使他们还没有达到。

  const alwaysDrivingAge = age => R.ifElse(R.lt(R.__, 16), R.always(16), a => a)(age)
  const alwaysDrivingAge2 = age => R.ifElse(R.lt(R.__, 16), R.always(16), R.identity)(age)

  // when and unless
  // 在 ifElse 代码中，其中一个条件分支为 identity 也很常见。所以 Ramda 也提供了便捷的方法。 如果像上例所示，第二个分支是 identity，可以用 when 代替 ifElse：

  const alwaysDrivingAge3 = age => R.when(R.lt(R.__, 16), R.always(16))(age)
  const alwaysDrivingAge4 = age => R.unless(R.gte(R.__, 16), R.always(16))(age)

  // cond

  // Ramda 还提供了 cond 函数，来代替 switch 语句或链式的 if...then...else 语句。

  const water = temperature => R.cond([
    [R.equals(0), R.always('water freezes at 0°C')],
    [R.equals(100), R.always('water boils at 100°C')],
    [R.T, temp => `nothing special happens at ${temp}°C`]
  ])(temperature)
}
