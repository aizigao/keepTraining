// boolean
let isDone: boolean = false;
let cbBoolean: Boolean = new Boolean(1);
let cbBoolean2: boolean = Boolean(1);

// number

let dec: number = 6;
// string

let myAge: string = "222";

// 空
// void --> undefined || null

function alartName(): void {
  alert("xxx");
}

let unusable: void = undefined;

// undefined 和 null  是所有类型是子类型
let u: undefined = undefined;
let n: null = null;

// 而 void 类型的变量不能赋值给 number 类型的变量

// let uu: number;
// // let uu: void;
// let numm: number = uu;

interface IPerson {
  readonly name: string;
  age: number;
  [propName: string]: string | number;
}

let tom: IPerson = {
  name: "Tom",
  age: 25,
  test: 22
};


