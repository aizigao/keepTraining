// 注释

package main // 标识为只执行文件，不是一个库

import (
	"fmt"
	"os"
	"strconv"
)

func main() {
	fmt.Println("test")
	beyondHello()
}

func beyondHello() {
	var x int
	x = 3
	// 可以用:=来偷懒，它自动把变量类型、声明和赋值都搞定了。
	y := 4
	sum, prod := learnMultiple(x, y)

	fmt.Println("sum:", sum, "prod:", prod)
	learnType()
}

func learnMultiple(x, y int) (int, int) {
	return x + y, x * y
}

func learnType() {
	str := "少夺夺夺夺"
	fmt.Println(str)
	s := `dfdf
	dfsdfdf`
	fmt.Println(s)
	g := 'Σ'
	fmt.Println(g)
	f := 3.1415
	fmt.Println(f)
	c := 3 + 4i
	fmt.Println(c)

	var u uint = 7
	fmt.Println(u)
	var pi float32 = 22. / 7
	fmt.Println(pi)

	n := byte('\n')
	fmt.Println(n)

	var a4 [4]int
	fmt.Println(a4)

	a3 := [...]int{3, 1, 5}
	fmt.Println(a3)

	s3 := []int{4, 5, 9}
	fmt.Println(s3)
	s4 := make([]int, 4)
	fmt.Println(s4)      // [0 0 0 0]
	fmt.Println(len(s4)) // 4
	fmt.Println(cap(s4)) // 4
	// var d2 [][]float64
	// bs := []byte("a slice")
	ss := []int{1, 2, 3}
	ss = append(ss, []int{7, 8, 9}...)
	fmt.Println(ss)

	// p,q 为 int 变量指针
	p, q := learnMemory()
	fmt.Println(*p, *q)

	// map
	m := make(map[string]int)
	m["a"] = 1
	m["b"] = 2
	fmt.Println(m)

	mm := map[string]int{"one": 1, "two": 2}
	fmt.Println(mm)

	// 在Go语言中未使用的变量在编译的时候会报错，而不是warning。
	// 下划线 _ 可以使你“使用”一个变量，但是丢弃它的值。
	// _, _, _, _, _, _, _, _, _, _ = str, s2, g, f, u, pi, n, a3, s4, bs

	file, _ := os.Create("output.text")
	fmt.Fprintln(file, "test")
	file.Close()
	learnFlowControl() // 回到流程控制

}

// 和其他编程语言不同的是，go支持有名称的变量返回值。
// 声明返回值时带上一个名字允许我们在函数内的不同位置
// 只用写return一个词就能将函数内指定名称的变量返回
func learnNamedReturns(x, y int) (z int) {
	z = x * y
	return // 隐式返回z，因为前面指定了它。
}

// Go全面支持垃圾回收。Go有指针，但是不支持指针运算。
// 你会因为空指针而犯错，但是不会因为增加指针而犯错。
func learnMemory() (p, q *int) {
	// 返回int型变量指针p和q
	p = new(int) // 内置函数new分配内存
	// 自动将分配的int赋值0，p不再是空的了。
	s := make([]int, 20) // 给20个int变量分配一块内存
	s[3] = 7             // 赋值
	r := -2              // 声明另一个局部变量
	return &s[3], &r     // & 取地址
}

func learnFlowControl() {

	if true {
		fmt.Println("true")
	} else {
		fmt.Println("false")
	}

	// switch
	x := 1
	switch x {
	case 1:
		fmt.Println("one")
		fallthrough // 默认 break 不想break是加这个
	case 2:
		fmt.Println("two")
	default:
		fmt.Println("other")
	}

	for i := 0; i < 10; i++ {
		fmt.Println(i)
	}

	// 用range可以枚举 array、slice、string、map、channel等不同类型
	// 对于channel，range返回一个值，
	// array、slice、string、map等其他类型返回一对儿
	for key, value := range map[string]int{"one": 1, "two": 2, "three": 3} {
		// 打印map中的每一个键值对
		fmt.Printf("索引：%s, 值为：%d\n", key, value)
	}

	for index, val := range []int{1, 2, 3, 4, 5} {
		fmt.Println(index, val)
	}

	for _, s := range "test" {
		fmt.Println(string(s))
	}

	xBig := func() bool {
		return x > 100
	}

	fmt.Println("xBig", xBig())
	learnDefer()
}

func learnDefer() (ok bool) {
	// defer表达式在函数返回的前一刻执行
	defer fmt.Println("defer表达式执行顺序为后进先出（LIFO）")
	defer fmt.Println("\n这句话比上句话先输出，因为")
	// 关于defer的用法，例如用defer关闭一个文件，
	// 就可以让关闭操作与打开操作的代码更近一些
	return true
}

type Stringer interface {
	String() string
}

type pair struct {
	x, y int
}

func (p pair) String() string {
	return fmt.Sprintln("%d, %d", p.x, p.y)
}

// 有变长参数列表的函数
func learnVariadicParams(myStrings ...interface{}) {
	// 枚举变长参数列表的每个参数值
	// 下划线在这里用来抛弃枚举时返回的数组索引值
	for _, param := range myStrings {
		fmt.Println("param:", param)
	}

	// 将可变参数列表作为其他函数的参数列表
	fmt.Println("params:", fmt.Sprintln(myStrings...))

	learnErrorHandling()
}

func learnErrorHandling() {
	// ", ok"用来判断有没有正常工作
	m := map[int]string{3: "three", 4: "four"}
	if x, ok := m[1]; !ok { // ok 为false，因为m中没有1
		fmt.Println("别找了真没有")
	} else {
		fmt.Print(x) // 如果x在map中的话，x就是那个值喽。
	}
	// 错误可不只是ok，它还可以给出关于问题的更多细节。
	if _, err := strconv.Atoi("non-int"); err != nil { // _ discards value
		// 输出"strconv.ParseInt: parsing "non-int": invalid syntax"
		fmt.Println(err)
	}
	// 待会再说接口吧。同时，
	learnConcurrency()
}

// c是channel类型，一个并发安全的通信对象。
func inc(i int, c chan int) {
	c <- i + 1 // <-把右边的发送到左边的channel。
}

// 我们将用inc函数来并发地增加一些数字。
func learnConcurrency() {
	// 像前面的例子中用make来初始化一个slice一样，make会分配和初始化slice，map和channel。
	c := make(chan int)
	// 用go关键字开始三个并发的goroutine，如果机器支持的话，还可能是并行执行。
	// 三个都被发送到同一个channel。
	go inc(0, c) // go is a statement that starts a new goroutine.
	go inc(10, c)
	go inc(-805, c)
	// 从channel中读取结果并打印。
	// 打印出什么东西是不可预知的。
	fmt.Println(<-c, <-c, <-c) // channel在右边的时候，<-是读操作。

	cs := make(chan string)       // 操作string的channel
	cc := make(chan chan string)  // 操作channel的channel
	go func() { c <- 84 }()       // 开始一个goroutine来发送一个新的数字
	go func() { cs <- "wordy" }() // 发送给cs
	// Select类似于switch，但是每个case包括一个channel操作。
	// 它随机选择一个准备好通讯的case。
	select {
	case i := <-c: // 从channel接收的值可以赋给其他变量
		fmt.Println("这是……", i)
	case <-cs: // 或者直接丢弃
		fmt.Println("这是个字符串！")
	case <-cc: // 空的，还没作好通讯的准备
		fmt.Println("别瞎想")
	}
	// 上面c或者cs的值被取到，其中一个goroutine结束，另外一个一直阻塞。

	learnWebProgramming() // Go很适合web编程，我知道你也想学！
}
