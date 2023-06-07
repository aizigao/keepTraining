import * as R from 'ramda'


// 下面这段大概意思是根据 row.length 判断当前这个格子需不需要填充砖块，根据结果返回砖块值或 null
// 最后 prepend 到 map 里

compose(
  prepend,
  ifElse(identity < boolean >, brickSample, always(null)),
  shouldFill
)(row.length)(row),

