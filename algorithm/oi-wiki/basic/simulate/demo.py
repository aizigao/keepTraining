'''
一只一英寸的蠕虫位n英寸深的井的底部。
它每分钟向上爬u英寸，但是必须休息一分钟才能再次向上爬。在休息的时候，它滑落了d英寸。之后它将重复向上爬和休息的过程。蠕虫爬出井口花费了多长时间？我们将不足一分钟的部分算作一整分钟。如果蠕虫爬完后刚好到达井的顶部，我们也设作蠕虫已经爬出井口。
'''

# #include <cstdio>
# int main(void) {
#   int n = 0, u = 0, d = 0;
#   while (scanf("%d %d %d", &n, &u, &d) && n != 0) {
#     int time = 0, dist = 0;
#     while (true) {  //用死循环来枚举
#       dist += u;
#       time++;
#       if (dist >= n) break;  //满足条件则退出死循环
#       dist -= d;
#       time++;
#     }
#     printf("%d\n", time);  //输出得到的结果
#   }
#   return 0;
# }


def clampUp(n, u, d):
    time = 0
    dist = 0

    # 死循环模拟枚举
    while True:
        dist += u
        time += 1

        if dist >= n:
            break
        dist -= d
        time += 1
    return time


print(clampUp(30, 12, 1))