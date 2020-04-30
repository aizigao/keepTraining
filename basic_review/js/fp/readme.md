<!-- https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ -->

- function  一等公民
- curry 
- compose
- pointfree 模式指的是，永远不必说出你的数据。Pointfree style means never having to say your data
- categoryTheory
- hindleymilner 



## categoryTheory

### 对象的搜集
- 对象就是数据类型，例如 String、Boolean、Number 和 Object 等等
- Boolean 就可以看作是 [true, false] 的集合
- Number 可以是所有实数的一个集合

### 态射的搜集
- 态射是标准的、普通的纯函数。


### 态射的组合
- compose

```js
// map 的组合律
var law = compose(map(f), map(g)) == map(compose(f, g));
```