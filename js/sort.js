var test = [1, 5, 3, 6, 0, 2, 4, 6, 12,345,12];

const getMid = (low, high) => {
  return Math.round((high + low) / 2);
};
const binarySearch = (arr, findVal) => {
    let low_cursor = 0
    let high_cursor = arr.length -1
    let result_index = -1
    let arrSorted = arr.sort((a,b)=>a-b)
    while(low_cursor <= high_cursor){
        let mid_cursor = getMid(low_cursor,high_cursor)
        let midValue = arrSorted[mid_cursor]
        if(findVal === midValue){
            result_index = mid_cursor
            break
        }else if (findVal > midValue){
            low_cursor = mid_cursor + 1
        }else{
            high_cursor= mid_cursor - 1
        }
    }
    return result_index
};

console.log(binarySearch(test, 2));
console.log(binarySearch(test, 0));
console.log(binarySearch(test, 345));
