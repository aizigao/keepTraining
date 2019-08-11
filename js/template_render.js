let template = "我是{{name}}, 年龄{{ age }}, 性别 {{ sex }}";

let data = {
  name: "姓名",
  age: 18,
  // sex: 'male'//不展示
};

const isNil = o => o == null;

const render = (template,data)=>{
    return template.replace(/\{\{(.*?)\}\}/g, (match, key)=>{
        const trimedKey = key.trim()
        const result = data[trimedKey]
        return !isNil(result)?result:''
    })
}
console.log(render(template, data));
