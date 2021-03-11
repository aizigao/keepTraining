/**---------------------------
原理：
1、从点P出发，任意引一条射线（模拟光线）。
2、记录该条射线与多边形A的边相交点的个数。
3、判断交点的个数，若为偶数表示在图形外，若为奇数表示在图像内。
---------------------------**/

/**
 * @param dot {{x,y}} 需要判断的点
 * @param  coordinates {{x,y}[]} 多边形点坐标的数组，为保证图形能够闭合，起点和终点必须相等。
 *        比如三角形需要四个点表示，第一个点和最后一个点必须相同。
 */
function judge(dot, coordinates) {
  var x = dot.x,
    y = dot.y;
  var crossNum = 0;
  for (var i = 0; i < coordinates.length - 1; i++) {
    var start = coordinates[i];
    var end = coordinates[i + 1];

    // 起点、终点斜率不存在的情况
    if (start.x === end.x) {
      // 因为射线向右水平，此处说明不相交
      if (x > start.x) continue;

      if (
        (end.y > start.y && y >= start.y && y <= end.y) ||
        (end.y < start.y && y >= end.y && y <= start.y)
      ) {
        crossNum++;
      }
      continue;
    }
    // 斜率存在的情况，计算斜率
    var k = (end.y - start.y) / (end.x - start.x);
    // 交点的x坐标
    var x0 = (y - start.y) / k + start.x;
    // 因为射线向右水平，此处说明不相交
    if (x > x0) continue;

    if (
      (end.x > start.x && x0 >= start.x && x0 <= end.x) ||
      (end.x < start.x && x0 >= end.x && x0 <= start.x)
    ) {
      crossNum++;
    }
  }

  return crossNum % 2 === 1;
}
