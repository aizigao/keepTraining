var tpl = "我是 {{ name }} , 年龄 {{age}}";

let data = {
  name: "姓名",
  age: 18
};

function render({ tpl, data }) {
  const reg = new RegExp("{{(.*?)}}", "g");
  const r = tpl.replace(reg, (match, key) => {
    return data[key.trim()];
  });
  return r;
}

console.log(render({ tpl, data }));

const test = {
    getElementByTag:(){
        return  [{
            className: 'test001'
        }]
    }
}


function queryCLassName(node, name) {
  // const elements = node.getElementByTag("*");
  const names = name.split("s").trim();
}

console.log();
