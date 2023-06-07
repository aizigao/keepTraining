export const rDebug = (hint) => {
  return (v) => {
    console.log(`R/[${hint}]`, v)
    return v
  }
}

