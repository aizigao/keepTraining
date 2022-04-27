# 单调栈

https://oi-wiki.org/ds/monotonous-stack/

顾名思义，单调栈即满足单调性的栈结构。与单调队列相比，其只在一端进行进出。

## 操作

### 插入

将一个元素插入单调栈时，为了维护栈的单调性，需要在保证将该元素插入到栈顶后整个栈满足单调性的前提下弹出最少的元素。

-   栈中自顶向下的元素为 `{0, 11, 45, 81}`
-   插入 14 后，要依次弹出 `0, 11`, 变为 `{14, 45, 81}`

```
insert x
while !sta.empty() && sta.top()<x
    sta.pop()
sta.push(x)
```

### 使用

自然就是从栈顶读出来一个元素，该元素满足单调性的某一端