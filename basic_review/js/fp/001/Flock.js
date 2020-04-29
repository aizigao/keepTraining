/**
 * 下面是一个海鸥程序，
 * 鸟群合并则变成了一个更大的鸟群，
 * 繁殖则增加了鸟群的数量，
 * 增加的数量就是它们繁殖出来的海鸥的数量
 */
// -- bad
{
  var Flock = function (n) {
    this.seagulls = n;
  };

  Flock.prototype.conjoin = function (other) {
    this.seagulls += other.seagulls;
    return this;
  };

  Flock.prototype.breed = function (other) {
    this.seagulls = this.seagulls * other.seagulls;
    return this;
  };

  var flock_a = new Flock(4);
  var flock_b = new Flock(2);
  var flock_c = new Flock(0);

  var result = flock_a
    .conjoin(flock_c)
    .breed(flock_b)
    .conjoin(flock_a.breed(flock_b)).seagulls;
  console.log("[bad]", result); // -- 正确为16
  //=> 32
}

// -- good

{
  var conjoin = function (flock_x, flock_y) {
    return flock_x + flock_y;
  };
  var breed = function (flock_x, flock_y) {
    return flock_x * flock_y;
  };

  var flock_a = 4;
  var flock_b = 2;
  var flock_c = 0;

  var result = conjoin(
    breed(flock_b, conjoin(flock_a, flock_c)),
    breed(flock_a, flock_b)
  );
  console.log("[good__1]", result);
  //=>16
}

// -- good
{
  var add = function (x, y) {
    return x + y;
  };
  var multiply = function (x, y) {
    return x * y;
  };

  var flock_a = 4;
  var flock_b = 2;
  var flock_c = 0;

  var result = add(
    multiply(flock_b, add(flock_a, flock_c)),
    multiply(flock_b, flock_a)
  );
  //=>16
  var result2 = add(
    multiply(flock_b, add(flock_a, flock_c)),
    multiply(flock_b, flock_a)
  );
  var result2 = multiply(flock_b, add(add(flock_a, flock_c) + flock_a));
  console.log("[good__2]", result);
  console.log("[good__2__x]", result);
}
