let world: String = "world"
print("Hello, \(world)")

print(#" 1 line 2 line 3 line "xxx" "#)


print("""
line1 
line2
line3
"""
)


// dicionarires
var occupations = [
	"Malcolm": "Captain",
	"Kaylee": "Mechanic"
]

occupations["Jayne"] = "Public Relations"


/// sayHello
/// - Parameters
/// - to: xxx
/// - onDay: xxx
/// - Returns: A string xxxx
func sayHello(to name: String, onDay day: String) -> String {
	return "Hello \(name), the dayis \(day)"
}


let rst = sayHello(to: "nnn", onDay: "today")
print(rst)


// MARK: - Closures

var numbers = [1, 2, 6]

// Functions are special case closures ({})

// Closure example.
// `->` separates the arguments and return type
// `in` separates the closure header from the closure body
let rst2 = numbers.map({
    (number: Int) -> Int in
    let result = 3 * number
    return result
})

print(rst2)