import * as R from 'ramda'

console.log(
  R.until(
    // --
    R.gt(R.__, 100),
    R.multiply(2)
  )(1)
)

{
  const makeQuery = email => ({ query: { email } })
  const fetchMember = request =>
    Promise.resolve({ firstName: 'Bob', lastName: 'Loblaw', id: 42 })

  // getMemberName :: String -> Promise ({ firstName, lastName })
  const getMemberName = R.pipe(
    makeQuery,
    fetchMember,
    R.andThen(R.pick(['firstName', 'lastName']))
  )

  getMemberName('bob@gmail.com').then(console.log)
}

