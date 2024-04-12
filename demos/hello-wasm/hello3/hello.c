#include <stdio.h>
int main(int argc, char ** argv) {
    printf("Hello World\n");
}

// #ifdef __cplusplus
// extern "C" {
// #endif

int myFunction(int argc, char ** argv) {
  printf("我的函数已被调用\n");
  return 0;
}

// #ifdef __cplusplus
// }
// #endif