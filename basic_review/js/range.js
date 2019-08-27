const range = (start=0, end=0) =>{
  if(!/^\d+$/.test(String(start + end))){
    throw TypeError('start or end must be int')
  }
  return [... Array(end - start).keys()].map(i=> i+ start)
}


console.log(range(0, 12))
console.log(range(3,10))
console.log(range(0, 'dfsdf'))
