let elements = {
  tagName: "ul",
  props: { class: "list" },
  children: [
    {
      tagName: "li",
      children: ["item1"]
    },
    {
      tagName: "li",
      children: ["item1"]
    }
  ]
};

/********
 *
 * 构建一个 render 函数，将 domNode 对象渲染为 以下 dom
 * <ul class="list">
 *  <li>item1</li>
 *  <li>item2</li>
 * </ul>
 **********/

function render(domNode) {
  // 空节点
  if (!domNode) {
    return document.createDocumentFragment();
  }

  let $el;

  if (typeof domNode === "object") {
    $el = document.createElement(domNode.tagName);
    if (domNode.hasOwnproperty("props")) {
      for (let key in domNode.props) {
        $el.setAttribute(key, domNode.props[key]);
      }
    }

    if (domNode.hasOwnproperty("children")) {
      domNode.children.forEach(val => {
        const $childEl = render(val);
        $el.appendChild($childEl);
      });
    }
  } else {
    $el = document.createTextNode(domNode);
  }
  return $el;
}
