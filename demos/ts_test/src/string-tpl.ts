type Flatten<T> = T extends unknown[] ? T[number] : T;

// Extracts out the element type.
type Str = Flatten<string[]>;
//   string

// Leaves the type alone.
type Num = Flatten<number>;
//   number

interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;

type Example2 = RegExp extends Animal ? number : string;
