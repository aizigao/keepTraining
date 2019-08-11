// 斐波那契数列，又称黄金分割数列，指的是这样一个数列：0、1、1、2、3、5、8、13、21、34、……在数学上，斐波纳契数列主要考察递归的调用。我们一般都知道定义

// fibo[i] = fibo[i-1] + fibo[i-2]
// 0 1 1 2 3 5 8 13 21


const getFibonacci=(n)=>{
    let fibarr = []
    let i = 0

    // 正向创建
    while(i < n){
        if(i <= 1){
            fibarr.push(i)
        }else{
            fibarr.push(fibarr[i-1] + fibarr[i-2])
        }
        i++
    }
    return fibarr
}


// https://codepen.io/Jack_Pu/pen/LRaxZB
// /**************
//  * @example
var canvas = document.querySelector('canvas');

canvas.width = 600;
canvas.height = 480;

var coor = {
  x: 300,
  y: 240,
};

var ctx = canvas.getContext('2d');

function draw(r, n ,prevR) {
   if(n>2) {
     switch(n%4) {
      case 0 :
        coor.y = coor.y - 5 * prevR;
        coor.y = coor.y + 5 * r;

        break;
      case 1 :
        coor.x = coor.x + 5 * prevR;
        coor.x = coor.x - 5 * r;
        break;
      case 2 :
        coor.y = coor.y + 5 * prevR;
        coor.y = coor.y - 5 * r;
        break;
      case 3 :
        coor.x = coor.x - 5 * prevR;
        coor.x = coor.x + 5 * r;
        break;
    }
  }
  ctx.beginPath();
  ctx.arc(coor.x,coor.y,5*r,Math.PI*0.5*(n),Math.PI*0.5*(n-1),true);
  if(n>1) {
     switch(n%4) {
      case 0 :
        ctx.moveTo(coor.x - 5*r,coor.y);

        break;
      case 1 :
        ctx.moveTo(coor.x,coor.y + 5*r);
        break;
      case 2 :
       ctx.moveTo(coor.x + 5*r,coor.y);
        break;
      case 3 :
        ctx.moveTo(coor.x,coor.y-5*r);
        break;
    }
  }

  ctx.lineWidth = 1;
  ctx.strokeStyle = '#fff';
  ctx.stroke();
}


var data = getFibonacci(10);

for(var i = 0,l=data.length;i<l;i++) {
  if(data[i]!=0) {
    draw(data[i],i,data[i-1]);

  }
}

// **********/
