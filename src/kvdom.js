// 转换vdom为dom diff算法

export function initVnode(vnode) {
  // vnode是虚拟dom数
  const { vtype } = vnode

  if (!vtype) {
    // 文本节点
    return document.createTextNode(vnode);
  }
  if (vtype === 1) {
    // 原生节点
    return createElement(vnode);
  } else if (vtype === 2) {
    // class组件
    return createClassComp(vnode);
  } else {
    // function组件
    return createFunComp(vnode);
  }


}

function createElement(vnode) {
  const { type, props } = vnode;
  const node = document.createElement(type);
  // 属性处理
  const { key, children, ...rest } = props;
  Object.keys(rest).forEach(attr => {
    // 特殊属性：htmlFor,className
    if (attr === 'className') {
      node.setAttribute('class', rest[attr])
    } else {
      node.setAttribute(attr, rest[attr])
    }
  })

  children.forEach(c => {
    if (Array.isArray(c)) {
      c.forEach(n => node.appendChild(initVnode(n)))
    } else {
      node.appendChild(initVnode(c))
    }
  })
  return node
}

function createClassComp(vnode) {

  const { type, props } = vnode;
  const component = new type(props);
  // 执行class组件render方法返回vdom
  const newVnode = component.render();
  return initVnode(newVnode)
}

function createFunComp(vnode) {
  const { type, props } = vnode;
  // 执行fun组件返回vdom
  const newVnode = type(props);
  return initVnode(newVnode)
}

export function createNode(vtype, type, props) {
  const vnode = { vtype, type, props }

  return vnode
}