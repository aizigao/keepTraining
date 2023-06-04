import { rDebug } from './util'
import * as R from 'ramda'

const OUR_COUNTRY = 'china'
{
  const wasBornInCountry = person => person.birthCountry === OUR_COUNTRY
  const wasNaturalized = person => Boolean(person.naturalizationDate)
  const isOver18 = person => person.age >= 18

  const isCitizen = R.either(wasBornInCountry, wasNaturalized)
  const isEligibleToVote = R.both(isOver18, isCitizen)
}

{
  const wasBornInCountry = person => R.equals(person.birthCountry, OUR_COUNTRY)
  const wasNaturalized = person => Boolean(person.naturalizationDate)
  const isOver18 = person => R.gte(person.age, 18)
}

// 幸运的是， Ramda 为我们提供了访问对象属性的辅助函数：prop。

{
  const wasBornInCountry = person => R.equals(R.prop('birthCountry', person), OUR_COUNTRY)
  const wasNaturalized = person => Boolean(R.prop('naturalizationDate', person))
  const isOver18 = person => R.gte(R.prop('age', person), 18)
}

// --
{
  const wasBornInCountry = person => R.equals(OUR_COUNTRY, R.prop('birthCountry', person))
  const wasNaturalized = person => Boolean(R.prop('naturalizationDate', person))
  const isOver18 = person => R.gte(R.prop('age', person), 18)
}

// 还是不太好，还需要继续优化。我们继续利用柯里化的特性来优化 prop 的调用。

{
  const wasBornInCountry = person => R.equals(OUR_COUNTRY)(R.prop('birthCountry')(person))
  const wasNaturalized = person => Boolean(R.prop('naturalizationDate')(person))
  const isOver18 = person => R.gte(R.__, 18)(R.prop('age')(person))
}

// --
{
  const wasBornInCountry = person => R.compose(R.equals(OUR_COUNTRY), R.prop('birthCountry'))(person)
  const wasNaturalized = person => R.compose(Boolean, R.prop('naturalizationDate'))(person)
  const isOver18 = person => R.compose(R.gte(R.__, 18), R.prop('age'))(person)
}

{
  const wasBornInCountry = R.compose(R.equals(OUR_COUNTRY), R.prop('birthCountry'))
  const wasNaturalized = R.compose(Boolean, R.prop('naturalizationDate'))
  const isOver18 = R.compose(R.gte(R.__, 18), R.prop('age'))
}
