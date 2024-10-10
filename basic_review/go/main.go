package main

import "fmt"

func main() {
	// println("Hello, World!")
	fmt.Println("Hello, World!")
	beyondHello()
}

func beyondHello() {
	var x = 3
	y := "dfsfsdf" // 短变量声明只能在函数体内部使用
	println(x, y)
	a5 := [...]int{3, 1, 5, 10, 100}
	println(join(a5, ','))
}

func join(a5 [5]int, r rune) string {
	var s string
	for i, v := range a5 {
		if i > 0 {
			s += string(r)
		}
		s += fmt.Sprint(v)
	}
	return s

}
